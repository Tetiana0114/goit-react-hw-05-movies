import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/fetchMovies';

import Loader from '../../components/Loader';
import MoviesList from '../../components/MoviesList';

const Movies = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({});
    const searchName = searchParams.get('query');
 
  const handleSearchFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
  };
    
useEffect(() => {
  if (!searchName) {
    return;
}
    const searchNewMovies = async () => {
        setLoading(true);
        try {
        const newQuery = await searchMovies(searchName);
        setMovies(newQuery);
        }
        catch (error) {
          setError(error);
        }
        finally {
          setLoading(false);
        }
}
searchNewMovies();
}, [searchName]);

  return (
    <div>
      <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {movies && <MoviesList movies={movies}/>}
    </div>
  );
};

export default Movies;