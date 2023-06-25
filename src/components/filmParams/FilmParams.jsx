import { useEffect, useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

import { NewApi } from 'API/Api';
const api = new NewApi();

const FilmePage = () => {
  const [film, setFilm] = useState({});
  const params = useParams();
  console.log('params', params.movieId);
  useEffect(() => {
    const getApi = async () => {
      // setStatus(true);
      try {
        const data = await api.getFilmId(params.movieId);
        console.log(data);
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
  // backdrop_path
  //https://image.tmdb.org/t/p/w500/
  return (
    <div>
      <h2>{film.original_name ? film.original_name : film.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
        alt=""
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
    </div>
  );
};
export default FilmePage;
