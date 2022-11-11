import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { getMovieDetails } from '../../services/fetchMovies';
import Loader from '../../components/Loader';
import GoBackBtn from 'components/GoBackBtn';
import MovieInfo from 'components/MovieInfo';
import AdditionalInformation from 'components/AdditionalInformation';

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";
  
  useEffect(() => {
    if (!movieId) return;

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
    <Link to={backLink}>
    <GoBackBtn/>
    </Link>
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {movieDetails && (<MovieInfo film={movieDetails} /> )}
    <hr />
      <div>
        <AdditionalInformation />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;