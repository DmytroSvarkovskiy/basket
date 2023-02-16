import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

export const ItemBasket = styled.li`
  width: 281px;
  position: relative;

  cursor: pointer;
  border: 1px solid gray;
  border-radius: 7px;
  transition: scale 0.25s, box-shadow 0.3s;
  :hover {
    box-shadow: rgba(8, 34, 19, 0.1) 0px 4px 16px,
      rgba(3, 17, 11, 0.1) 0px 8px 24px, rgba(7, 44, 32, 0.1) 0px 16px 56px;
  }
  padding-bottom: 10px;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
export const ItemImgBasket = styled.img`
  width: 280px;
  object-fit: cover;
  height: 220px;
  overflow: hidden;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
export const TextWrapBasket = styled.div`
  padding: 10px 5px;
  font-size: 20px;
  font-weight: 500;
  max-width: 269px;
`;
export const DeleteBtn = styled.button`
  position: absolute;
  top: -2px;
  left: 225px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const DeleteIcon = styled(TiDelete)`
  width: 50px;
  height: 50px;
  color: red;
`;
