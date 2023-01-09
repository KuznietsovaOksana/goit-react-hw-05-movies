import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  font-size: 20px;
`;

export const Item = styled.li`
  margin-bottom: 16px;
`;

export const NavItem = styled(NavLink)`
  color: #000000;
  border-radius: 5px;
  padding: 6px 12px;
  display: inline-block;

  :hover,
  :focus {
    color: #dc1818;
  }
`;
