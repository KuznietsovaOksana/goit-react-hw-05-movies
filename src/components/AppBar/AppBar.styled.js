import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.header`
  font-size: 32px;
  text-transform: uppercase;
  border-bottom: 2px solid black;
`;

export const Nav = styled.header`
  display: flex;
  justify-content: space-around;
  font-size: 32px;
  padding: 16px;
  text-transform: uppercase;
`;

export const NavItem = styled(NavLink)`
  color: #000000;
  border-radius: 5px;
  padding: 6px 12px;

  &.active {
    color: #ffffff;
    background: #dc1818;
    border-radius: 5px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #dc1818;
  }
`;
