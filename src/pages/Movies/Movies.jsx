import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/fetchMovies';
import SearchBar from 'components/SearchBar';
import Loader from '../../components/Loader';
import MoviesList from '../../components/MoviesList';

const Movies = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({});
    const searchName = searchParams.get('query');
 
const handleSearchFormSubmit = event => {
    setSearchParams({ query: event.target.value.toLowerCase() });
    }
    
useEffect(() => {
  if (searchName === '') {
    return;
}
    const searchNewMovies = async () => {
        setLoading(true);
        try {
        const query = await searchMovies(searchName);
        setMovies(query);
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
    <main>
    <SearchBar onSubmit={handleSearchFormSubmit} />
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {movies && <MoviesList movies={movies}/>}
    </main>
  );
};

export default Movies;

