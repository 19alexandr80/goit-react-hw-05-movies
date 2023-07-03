import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { MoviesList } from 'components/MoviesComp/MoviesList';
import { MoviesForm } from 'components/MoviesComp/MoviesForm';

import { ContainerStyled } from 'components/styled/CommonStyles';

import { NewApi } from 'API/Api';
const api = new NewApi();

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [filmsName, setFilmsName] = useState('');
  const [status, setStatus] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  if (searchParams.get('filmName') && filmsName === '' && status) {
    setFilmsName(searchParams.get('filmName'));
  }

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
        return;
      }
    };
    apiGet();
  }, [filmsName]);

  const inputChange = e => {
    setStatus(false);
    const paramInput =
      e.target.value !== '' ? { filmName: e.target.value } : {};
    setSearchParams(paramInput);
  };

  const formSubmit = e => {
    e.preventDefault();
    setFilmsName(searchParams.get('filmName'));
  };

  return (
    <ContainerStyled>
      <MoviesForm
        formSubmit={formSubmit}
        inputChange={inputChange}
        searchParams={searchParams.get('filmName')}
      />

      {films.length !== 0 && <MoviesList location={location} films={films} />}
    </ContainerStyled>
  );
};
export default Movies;
