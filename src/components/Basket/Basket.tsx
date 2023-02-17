import { useAppSelector } from '../../hooks';
import {
  TitleBasket,
  BasketWrap,
  BasketUl,
  OrderBtn,
  InfoOrderWrap,
} from './Basket.styled';
import { UnitOfBasket } from '../UnitOfBasket/UnitOfBasket';

const Basket: React.FC = () => {
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const totalPrice = useAppSelector(state => state.commodityState.totalPrise);

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
            />
          );
        })}
      </BasketUl>
    </BasketWrap>
  );
};
export default Basket;
