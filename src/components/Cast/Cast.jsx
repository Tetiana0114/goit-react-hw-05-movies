import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/fetchMovies';
import Loader from 'components/Loader';
import css from './Cast.module.css';

const Cast = () => {
    const [error, setError] = useState(null);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

  useEffect(() => {
    const getCastOfFilm= async () => {
      setLoading(true);
      try {
        const castOfFilm = await getMovieCast(movieId);
        setCast(castOfFilm);
      }
      catch (error) {
         setError(error);
      }
      finally {
        setLoading(false);
      }
    };
    getCastOfFilm();
  }, [movieId]);

  const imgUrl = 'https://image.tmdb.org/t/p/w500';

  return (  
<ul className={css.list}>
  {error && <p>Whoops, something went wrong...</p>}
  {loading && <Loader/>}
  {cast.map(actor => (
    <li key={actor.id} className={css.list_item}>
      <img
        src={imgUrl + actor.profile_path}
        alt=""
        width="120px" />
    <h3>{actor.name}</h3>
    <p>Character: {actor.character}</p>
    </li>
    ))}
</ul>
);
};

export default Cast;