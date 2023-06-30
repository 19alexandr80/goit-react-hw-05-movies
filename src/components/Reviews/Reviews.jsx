import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewApi } from 'API/Api';
const api = new NewApi();

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getApi = async () => {
      // setStatus(true);
      try {
        const data = await api.getReviews(params.movieId);
        if (!data) {
          alert('sorry no information yet');
          return;
        }
        setReviews(data.results);
      } catch (error) {
        console.error(error.messeng);
      } finally {
        // setStatus(false);
        return;
      }
    };
    getApi();
  }, [params.movieId]);
  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Sorry no reviews yet</h3>
      )}
    </>
  );
};
