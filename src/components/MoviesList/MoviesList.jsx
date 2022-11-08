import PropTypes from 'prop-types';
import css from './MoviesList.module.css';
import { useLocation, Link } from 'react-router-dom';


const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={css.list_item}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
})),
};

export default MoviesList;