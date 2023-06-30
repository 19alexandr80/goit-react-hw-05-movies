import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewApi } from 'API/Api';
const api = new NewApi();

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getApi = async () => {
      // setStatus(true);
      try {
        const data = await api.getCast(params.movieId);
        if (!data) {
          alert('sorry no information yet');
          return;
        }
        setCast(data.cast);
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
    <div>
      <ul>
        {cast.map(cast => {
          return (
            <li key={`${cast.id}`}>
              <h3>{cast.name}</h3>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : ''
                }
                alt=""
                width="120"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
