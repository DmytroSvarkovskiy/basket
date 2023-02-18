import styled from 'styled-components';
export const Item = styled.li`
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
export const ItemImg = styled.img`
  object-fit: cover;
  width: 280px;
  height: 220px;
  overflow: hidden;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
export const TextWrap = styled.div`
  padding: 10px 5px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const BuyBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 95%;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  height: 35px;
  background-color: #389755;
  color: #ffffff;
  &:disabled {
    background-color: #d1d1d1;
  }
  :hover:not(:disabled) {
    background-color: #26b854;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
  }
  transition: background-color 0.25s, box-shadow 0.3s;
`;
// if there are less than 4 units of the product left, the text is red
export const Remainder = styled.span<{ children: string | number }>`
  color: ${({ children }): string => {
    return +children < 4 ? 'red' : 'inherit';
  }};
`;
