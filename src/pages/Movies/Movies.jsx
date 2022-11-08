import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/fetchMovies';
import css from './Movies.module.css';
import { FaSearch } from "react-icons/fa";

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
    <div >
      <div className={css.search_bar}>
        <form onSubmit={handleSearchFormSubmit} className={css.form}>
        <input className={css.form_input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
          <button type="submit" className={css.form_btn}><FaSearch size={26} className={css.btn_svg} /></button>
      </form>
      </div>
      
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {movies && <MoviesList movies={movies}/>}
    </div>
  );
};

export default Movies;