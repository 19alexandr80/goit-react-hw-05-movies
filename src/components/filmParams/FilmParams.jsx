import { useEffect, useState, useRef } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import def from 'image/default.png';

import { NewApi } from 'API/Api';
const api = new NewApi();

const FilmePage = () => {
  const [film, setFilm] = useState({});
  const params = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const getApi = async () => {
      // setStatus(true);
      try {
        const data = await api.getFilmId(params.movieId);
        if (!data) {
          alert('sorry no information yet');
          return;
        }
        setFilm(data);
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
      <Link to={backLink.current}>Button</Link>
      <h2>{film.original_name ? film.original_name : film.original_title}</h2>
      <img
        src={
          film.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}`
            : def
        }
        alt=""
        width="370"
      />

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default FilmePage;
