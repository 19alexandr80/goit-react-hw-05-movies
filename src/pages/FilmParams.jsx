import { useEffect, useState, useRef } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
// import def from 'image/default.png';

import { FilmCommp } from 'components/FilmCommp/FilmCommp';

import { ContainerStyled } from 'components/styled/CommonStyles';

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
    <ContainerStyled>
      <div>
        <Link to={backLink.current} style={{ textDecoration: 'none' }}>
          Go back
        </Link>
      </div>
      <FilmCommp film={film} />
      <Outlet />
    </ContainerStyled>
  );
};
export default FilmePage;
