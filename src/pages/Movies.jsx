import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { NewApi } from 'API/Api';
const api = new NewApi();

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (searchParams.get('filmName')) {
      const apiGet = async () => {
        try {
          const data = await api.getMovies(searchParams.get('filmName'));
          if (!data) {
            alert('sorry no information yet');
            return;
          }
          setFilms([...data.results]);
          console.log(films);
        } catch (error) {
          console.error(error.messeng);
        } finally {
          // setStatus(false);
          return;
        }
      };
      apiGet();
    }
  }, []);
  console.log('lllllllllllllllllllllll');

  // const apiGet = async () => {
  //   try {
  //     const data = await api.getMovies(searchParams.get('filmName'));
  //     if (!data) {
  //       alert('sorry no information yet');
  //       return;
  //     }
  //     setFilms([...data.results]);
  //   } catch (error) {
  //     console.error(error.messeng);
  //   } finally {
  //     // setStatus(false);
  //     return;
  //   }
  // };

  const inputChange = e => {
    const paramInput =
      e.target.value !== '' ? { filmName: e.target.value } : {};
    setSearchParams(paramInput);
  };

  const formSubmit = async e => {
    e.preventDefault();
    // apiGet();
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
