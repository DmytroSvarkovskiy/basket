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
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  color: #f15e5e;
  transition: scale 0.3s;
  :hover {
    scale: 1.1;
  }
`;
export const CountBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  padding: 4px 0;
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
export const RemainderBasket = styled.span<{ children: string }>`
  color: ${({ children }): string => {
    return +children <= 3 ? 'red' : 'inherit';
  }};
`;
