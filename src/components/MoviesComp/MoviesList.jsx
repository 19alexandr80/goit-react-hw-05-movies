import { Link } from 'react-router-dom';

import { ListStyled } from 'components/styled/CommonStyles';

export const MoviesList = ({ films, location }) => {
  return (
    <ListStyled>
      {films.map(film => {
        return (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.original_title ? film.original_title : film.title}
            </Link>
          </li>
        );
      })}
    </ListStyled>
  );
};
