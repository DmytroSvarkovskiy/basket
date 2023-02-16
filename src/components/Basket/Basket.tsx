import { useAppSelector } from '../../hooks';
import { TitleBasket, BasketWrap, BasketUl, OrderBtn } from './Basket.styled';
import { UnitOfBasket } from '../UnitOfBasket/UnitOfBasket';
import { useEffect, useState } from 'react';

const Basket: React.FC = () => {
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const totalPrices = goodsInBasket.reduce((acc, item) => item.price + acc, 0);

  useEffect(() => {
    setTotalprice(totalPrices);
  }, [totalPrices]);
  const [totalPrice, setTotalprice] = useState(0);

  return (
    <BasketWrap>
      <TitleBasket>Complete your purchase</TitleBasket>
      <div>
        {' '}
        <h3>Total Price:{totalPrice}$</h3>
        <OrderBtn>To order</OrderBtn>
      </div>

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
              calculationPrice={setTotalprice}
            />
          );
        })}
      </BasketUl>
    </BasketWrap>
  );
};
export default Basket;
