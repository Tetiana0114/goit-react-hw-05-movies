import PropTypes from 'prop-types';
import css from './MoviesList.module.css';
import { useLocation, NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={css.list_item}>
            <NavLink
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.link}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
})),
};

export default MoviesList;