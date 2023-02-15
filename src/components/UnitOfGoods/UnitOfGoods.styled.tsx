import styled from 'styled-components';
export const Item = styled.li`
  width: 281px;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 7px;
  transition: scale 0.25s;
  :hover {
  }
  padding-bottom: 10px;
`;
export const ItemImg = styled.img`
  width: 280px;
  height: 220px;
  overflow: hidden;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
export const TextWrap = styled.div`
  padding: 10px 5px;
  font-size: 22px;
  font-weight: 500;
`;
export const BuyBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  height: 30px;
  background-color: #389755;
  color: #ffffff;
  &:disabled {
    background-color: #d1d1d1;
  }
`;
