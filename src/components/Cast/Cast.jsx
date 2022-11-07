import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/fetchMovies';
import Loader from 'components/Loader';
// import css from './Cast.module.css';

const Cast = () => {
    const [error, setError] = useState(null);
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

  useEffect(() => {
    const getCastOfFilm= async () => {
      setLoading(true);
      try {
        const cast = await getMovieCast(id);
        setActors(cast);
      }
      catch (error) {
         setError(error);
      }
      finally {
        setLoading(false);
      }
    };
    getCastOfFilm();
  }, [id]);

  return (  
<ul>
       {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader/>}
    {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={actor.profile_path}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    
  );
};

export default Cast;
