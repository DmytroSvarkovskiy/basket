import { useAppSelector } from '../../hooks';
import {
  TitleBasket,
  BasketWrap,
  BasketUl,
  OrderBtn,
  InfoOrderWrap,
} from './Basket.styled';
import { useState, useEffect } from 'react';
import { UnitOfBasket } from '../UnitOfBasket/UnitOfBasket';

const Basket: React.FC = () => {
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const startPrice = goodsInBasket.reduce((acc, item) => item.price + acc, 0);
  useEffect(() => {
    setTotalPrice(startPrice);
  }, [startPrice]);
  const [totalPrice, setTotalPrice] = useState(startPrice);
  return (
    <BasketWrap>
      <TitleBasket draggable={false}>Complete your purchase</TitleBasket>
      <InfoOrderWrap>
        {' '}
        <h3>Total Price:{totalPrice}$</h3>
        <OrderBtn>To order</OrderBtn>
      </InfoOrderWrap>

      <BasketUl>
        {goodsInBasket.map(({ id, name, price, avatar, remainder }) => {
          return (
            <UnitOfBasket
              key={id}
              id={id}
              name={name}
              price={price}
              avatar={avatar}
              remainder={remainder}
              setTotalPrice={setTotalPrice}
            />
          );
        })}
      </BasketUl>
    </BasketWrap>
  );
};
export default Basket;
