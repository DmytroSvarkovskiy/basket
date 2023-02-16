import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { AiOutlineShop } from 'react-icons/ai';

export const Nav = styled.nav`
  display: flex;
  width: 1169px;
  align-items: center;
  justify-content: space-between;
  padding: 15px 3px;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  z-index: 1;
`;
export const WrapHeader = styled.div`
  position: fixed;
  border-bottom: 2px solid gray;
  background-color: #d1d8c6;
  width: 100%;
  z-index: 1;
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
    color: #179e54;
    border: 2px dotted #269726;
    border-radius: 7px;
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
