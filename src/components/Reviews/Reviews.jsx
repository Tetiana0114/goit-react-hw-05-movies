import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/fetchMovies';
import Loader from 'components/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  
  const noReviews = reviews.length === 0;
 
  useEffect(() => {
    const getReviewsOfFilm = async () => {
      setLoading(true);
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };
    getReviewsOfFilm();
  }, [movieId]);

  return (
    <div>
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {noReviews ? <p className={css.text}>We don't have any reviews for this movie.</p> :
        (<ul className={css.list}>{reviews.map(review => (
              <li key={review.id}>
              <h3>Author: <span className={css.author}>{review.author}</span></h3>
              <p>{review.content}</p>
              </li>
            ))}
        </ul>
        )}
    </div>
);
};

export default Reviews;