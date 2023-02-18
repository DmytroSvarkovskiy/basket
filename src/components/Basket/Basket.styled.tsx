import styled from 'styled-components';
export const TitleBasket = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #12361a;
  font-size: 28px;
`;

export const BasketUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 30px 0;
`;
export const BasketWrap = styled.div`
  padding-top: 100px;
`;
export const OrderBtn = styled.button`
  display: block;
  width: 200px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  height: 45px;
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
export const InfoOrderWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  color: #266d35;
`;
