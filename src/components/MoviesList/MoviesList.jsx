import PropTypes from 'prop-types';
// import css from './Movies.module.css';
import { useLocation, Link } from 'react-router-dom';


const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
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