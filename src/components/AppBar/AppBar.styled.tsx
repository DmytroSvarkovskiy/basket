import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 110px;
  height: 40px;
  justify-content: center;
  &.active {
    color: red;
    border: 1px solid red;
    border-radius: 5px;
  }
`;
