import { useState, useEffect } from 'react';
import { getTrendingMovie } from '../../services/fetchMovies';
import Loader from '../../components/Loader';
import MoviesList from '../../components/MoviesList';

const Home = () => {
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    const getTrendingMoviesList = async () => {
      setLoading(true);
      try {
        const movieList = await getTrendingMovie();
        setMovies(movieList);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    getTrendingMoviesList();
  }, []);

  return (
    <main>
    {error && <p>Whoops, something went wrong...</p>}
    <h1>Trending today:</h1>
    {loading && <Loader />}
    {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;