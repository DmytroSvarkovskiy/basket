import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { AiOutlineShop } from 'react-icons/ai';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  font-size: 20px;
  font-weight: 500;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 110px;
  height: 40px;
  justify-content: center;
  transition: color 0.4s, scale 0.4s;
  color: #688f96;
  :hover {
    color: #31700c;
  }
  &.active {
    color: #269726;
    border: 2px solid #269726;
    border-radius: 5px;
  }
  &#drop {
    scale: 1.8;
  }
`;
export const BasketIcon = styled(RiShoppingBasketLine)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
export const ShopIcon = styled(AiOutlineShop)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
