import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/fetchMovies';
import Loader from 'components/Loader';
// import css from './Reviews.module.css';

const Reviews = () => {
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
 
  useEffect(() => {
    const getReviewsOfFilm = async () => {
      setLoading(true);
      try {
        const movieReviews = await getMovieReviews(id);
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
  }, [id]);

  return (
    <div>
    {error && <p>Whoops, something went wrong...</p>}
    {loading && <Loader />}
    {reviews.length === 0 ?  <div>We don't have any reviews for this movie</div> : (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
    
  );
};

export default Reviews;
