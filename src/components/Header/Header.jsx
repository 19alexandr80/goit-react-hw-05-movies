import { ContainerStyled } from 'components/styled/CommonStyles';
import {
  CategoryStyled,
  ListHeaderStyled,
  NavLinkStyled,
} from 'components/Header/HeaderStyled.styled';

export const Header = () => {
  return (
    <ContainerStyled>
      <nav>
        <ListHeaderStyled>
          <CategoryStyled>
            <NavLinkStyled to="/">Home page</NavLinkStyled>
          </CategoryStyled>
          <CategoryStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </CategoryStyled>
        </ListHeaderStyled>
      </nav>
    </ContainerStyled>
  );
};
