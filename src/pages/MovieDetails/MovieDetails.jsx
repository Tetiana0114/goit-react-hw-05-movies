import {  Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../services/fetchMovies';
import Loader from '../../components/Loader';

const MovieDetails = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);
    const { id } = useParams();
    const location = useLocation();

  useEffect(() => {
    const getDetailsOfFilm = async () => {
      setLoading(true);
      try {
        const details = await getMovieDetails(id);
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
  }, [id]);

  return (
    <>
      <Link to={location?.state?.from ?? '/movies'}>
        <button type="button">Back to search</button>
          </Link>
          {error && <p>Whoops, something went wrong...</p>}
      {loading && <Loader />}
      {movieDetails && (
        <div>
          <img
            width="250px"
            src={movieDetails.poster_path}
            alt={movieDetails.title}
          />
          <div>
            <h1>
              {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieDetails.popularity}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;