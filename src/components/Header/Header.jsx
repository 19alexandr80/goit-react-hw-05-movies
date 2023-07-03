import { NavLink } from 'react-router-dom';

import { ContainerStyled } from 'components/styled/CommonStyles';
import {
  CategoryStyled,
  ListHeaderStyled,
} from 'components/Header/HeaderStyled.styled';

export const Header = () => {
  return (
    <ContainerStyled>
      <nav>
        <ListHeaderStyled>
          <CategoryStyled>
            <NavLink to="/">Home page</NavLink>
          </CategoryStyled>
          <CategoryStyled>
            <NavLink to="/movies">Movies</NavLink>
          </CategoryStyled>
        </ListHeaderStyled>
      </nav>
    </ContainerStyled>
  );
};
