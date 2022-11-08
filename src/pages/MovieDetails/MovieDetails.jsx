import { useState, useEffect } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { getMovieDetails } from '../../services/fetchMovies';
import Loader from '../../components/Loader';

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
    <button type="button">Go back</button>
    </Link>
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {movieDetails && (
        <div>
          <img width="300px" src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt={movieDetails.title}
          />
          <div>
            <h1>{movieDetails.title} / {movieDetails.release_date.slice(0, 4)}</h1>
            <p>"{movieDetails.tagline}"</p>
            <p>User Score: {Math.round(movieDetails.popularity)}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres:</h2>
            <ul>{movieDetails.genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}</ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional information</h2>
        <ul>
          <li><Link to="cast">Cast</Link></li>
          <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;