import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { FilmStyled } from 'components/HomeList/HomeListStyled.styled';
import { ContainerStyled, ListStyled } from 'components/styled/CommonStyles';

export const HomeList = ({ list, location }) => {
  //   console.log(list);
  //   console.log(location);
  return (
    <ContainerStyled>
      <ListStyled>
        {list.map(film => {
          return (
            <FilmStyled key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.original_name ? film.original_name : film.original_title}
              </Link>
            </FilmStyled>
          );
        })}
      </ListStyled>
    </ContainerStyled>
  );
};
