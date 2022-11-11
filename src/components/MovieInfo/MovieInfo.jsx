import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

const MovieInfo = ({ film }) => {

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <div className={css.info}>
          <img width="300px" src={imgUrl + film.poster_path} alt={film.title}
          />
          <div className={css.text_info}>
            <h1>{film.title} / {film.release_date.slice(0, 4)}</h1>
            {film.tagline !== "" && (
            <p className={css.highlighted_text}>"{film.tagline}"</p>
                )}
            <p>User Score: <span className={css.highlighted_text}>{Math.round(film.popularity)}</span></p>
            <h2>Overview</h2>
            {film.overview !== "" && (
            <p>{film.overview}</p>
                )}
            <h2>Genres:</h2>
            {film.genres.length !== 0 && (
            <ul className={css.list}>{film.genres.map(genre => (
            <li key={genre.id} className={css.list_item}>{genre.name}</li>))}
            </ul>
                )}
          </div>
        </div>
    )
}

MovieInfo.propTypes = {
film: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    tagline: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
}).isRequired,
};

export default MovieInfo;