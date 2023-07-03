import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { NewApi } from 'API/Api';
const api = new NewApi();

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [filmsName, setFilmsName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  if (searchParams.get('filmName') && filmsName === '') {
    setFilmsName(searchParams.get('filmName'));
  }
  console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
  useEffect(() => {
    const apiGet = async () => {
      try {
        const data = await api.getMovies(filmsName);
        if (!data) {
          alert('sorry no information yet');
          return;
        }
        setFilms([...data.results]);
      } catch (error) {
        console.error(error.messeng);
      } finally {
        // setStatus(false);
        return;
      }
    };
    apiGet();
  }, [filmsName]);

  const inputChange = e => {
    const paramInput =
      e.target.value !== '' ? { filmName: e.target.value } : {};
    setSearchParams(paramInput);
  };

  const formSubmit = e => {
    e.preventDefault();
    setFilmsName(searchParams.get('filmName'));
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <button>Find</button>
        <input
          type="text"
          onChange={inputChange}
          value={
            searchParams.get('filmName') ? searchParams.get('filmName') : ''
          }
        />
      </form>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.original_title ? film.original_title : film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Movies;
