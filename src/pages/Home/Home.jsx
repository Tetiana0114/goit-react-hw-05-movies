import { useState, useEffect } from 'react';
import { getTrendingMovie } from '../../services/fetchMovies';
import Loader from '../../components/Loader';
import MoviesList from '../../components/MoviesList';
import css from './Home.module.css';

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
    <h1 className={css.title}>Trending today:</h1>
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;