import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';

export const DeleteBtn = styled.button`
  position: absolute;
  top: -1px;
  left: 240px;
  cursor: pointer;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  width: 40px;
  height: 40px;
  background-color: #bcd4b3;
  border: none;
  display: block;
  padding: 1px 2px;
`;
export const DeleteIcon = styled(TiDeleteOutline)`
  width: 37px;
  height: 37px;
  color: #ca6715;
  transition: scale 0.3s;
  :hover {
    scale: 1.1;
  }
  margin: 0 auto;
`;
export const CountBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border-radius: 5px;
  outline: none;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  padding: 2px 0 6px;
  border: none;
  background-color: #389755;
  color: #ffffff;
  &:disabled {
    cursor: auto;
    background-color: #d1d1d1;
  }
  :hover:not(:disabled) {
    background-color: #26b854;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
  }
  transition: background-color 0.25s, box-shadow 0.3s;
`;
export const CountBasketWrap = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  align-items: center;
  gap: 30px;
  justify-content: space-around;
  margin-bottom: 15px;
`;
export const RemainterBasket = styled.p`
  margin-left: 5px;
  font-size: 18px;
  font-weight: 500;
`;
