import { useState, useEffect } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { getMovieDetails } from '../../services/fetchMovies';
import Loader from '../../components/Loader';
import css from './MovieDetails.module.css';
import { SlActionUndo } from "react-icons/sl";
import AdditionalInformation from 'components/AdditionalInformation';

const MovieDetails = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

  useEffect(() => {
    const getDetailsOfFilm = async () => {
      setLoading(true);
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };
    getDetailsOfFilm();
  }, [movieId]);

  return (
    <>
    <Link to={location?.state?.from ?? '/movies'}>
    <button type="button" className={css.btn}><SlActionUndo size={32} className={css.btn_svg}/></button>
    </Link>
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {movieDetails && (
        <div className={css.info}>
          <img width="300px" src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt={movieDetails.title}
          />
          <div className={css.text_info}>
            <h1>{movieDetails.title} / {movieDetails.release_date.slice(0, 4)}</h1>
            {movieDetails.tagline !== "" && (
            <p className={css.highlighted_text}>"{movieDetails.tagline}"</p>
            )}
            <p>User Score: <span className={css.highlighted_text}>{Math.round(movieDetails.popularity)}</span></p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres:</h2>
            <ul className={css.list}>{movieDetails.genres.map(genre => (
              <li key={genre.id} className={css.list_item}>{genre.name}</li>))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <AdditionalInformation/>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;