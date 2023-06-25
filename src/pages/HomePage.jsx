import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { NewApi } from 'API/Api';

const api = new NewApi();

const HomePage = () => {
  const [list, setList] = useState([]);
  // const [page, setPage] = useState(1);
  // const [status, setStatus] = useState(false);

  // const params = useParams();
  // console.log('params', params);

  useEffect(() => {
    const getApi = async () => {
      // setStatus(true);
      try {
        const data = await api.getAll();
        // setPage(prev => {
        //   return prev + 1;
        // });
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
  // console.log(list);
  // console.log(status);
  // console.log(page);
  return (
    <>
      <ul>
        {list.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${film.id}`}>
                {film.original_name ? film.original_name : film.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button type="button">Load more</button>
    </>
  );
};
export default HomePage;
