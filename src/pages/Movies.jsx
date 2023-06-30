import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { NewApi } from 'API/Api';
const api = new NewApi();

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputChange = e => {
    setSearchParams({ filmName: e.target.value });
  };
  const formSubmit = async e => {
    e.preventDefault();
    setSearchParams({ filmName: '' });
    try {
      const data = await api.getMovies(searchParams.get('filmName'));
      if (!data) {
        alert('sorry no information yet');
        return;
      }
      setFilms(prev => {
        return [...prev, ...data.results];
      });
    } catch (error) {
      console.error(error.messeng);
    } finally {
      // setStatus(false);
      return;
    }
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
              <Link to={`/movies/${film.id}`}>
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
