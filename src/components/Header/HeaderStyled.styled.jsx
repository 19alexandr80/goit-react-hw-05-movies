import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CategoryStyled = styled.li`
  padding: 4px;
`;
export const ListHeaderStyled = styled.ul`
  margin: 0px;
  padding: 30px;
  display: flex;
  font-size: 20px;
  list-style-type: none;
  gap: 30px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`;
