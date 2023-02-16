import styled from 'styled-components';
export const TitleBasket = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const BasketUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px 0;
`;
export const BasketWrap = styled.div`
  padding-top: 100px;
`;
export const OrderBtn = styled.button`
  transform: translate(-40% -40%);
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
