import { useAppSelector } from '../../hooks';
import { TitleBasket, BasketWrap, BasketUl } from './Basket.styled';
import { UnitOfBasket } from '../UnitOfBasket/UnitOfBasket';

const Basket: React.FC = () => {
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const totalPrice = goodsInBasket.reduce((acc, item) => item.price + acc, 0);

  return (
    <BasketWrap>
      <TitleBasket>Complete your purchase</TitleBasket>
      <h3>Total Price:{totalPrice}$</h3>

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
            />
          );
        })}
      </BasketUl>
    </BasketWrap>
  );
};
export default Basket;
