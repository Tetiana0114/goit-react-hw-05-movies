import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/fetchMovies';
import Loader from 'components/Loader';
// import css from './Cast.module.css';

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

  return (  
<ul>
  {error && <p>Whoops, something went wrong...</p>}
  {loading && <Loader/>}
  {cast.map(actor => (
    <li key={actor.id}>
    <img src={'https://image.tmdb.org/t/p/w500' + actor.profile_path} alt={actor.name} width="120px"/>
    <h3>{actor.name}</h3>
    <p><span>Character:</span> {actor.character}</p>
    </li>
    ))}
</ul>
);
};

export default Cast;