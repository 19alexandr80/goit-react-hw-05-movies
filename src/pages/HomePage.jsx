import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NewApi } from 'API/Api';

const api = new NewApi();

const HomePage = () => {
  const [list, setList] = useState([]);
  const location = useLocation();
  // const [status, setStatus] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      // setStatus(true);
      try {
        const data = await api.getAll();

        setList(prev => {
          return [...prev, ...data.results];
        });
      } catch (error) {
        console.error(error.messeng);
      } finally {
        // setStatus(false);
        return;
      }
    };
    getApi();
  }, []);

  return (
    <>
      <ul>
        {list.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.original_name ? film.original_name : film.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default HomePage;
