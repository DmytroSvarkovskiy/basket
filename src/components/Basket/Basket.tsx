import { useAppSelector } from '../../hooks';
import { TitleBasket } from './Basket.styled';
import { GoodsUl } from '../MainPage/MainPage.styled';
import { UnitOfBasket } from '../UnitOfBasket/UnitOfBasket';

const Basket: React.FC = () => {
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const totalPrice = goodsInBasket.reduce((acc, item) => item.price + acc, 0);

  return (
    <div>
      <TitleBasket>Selected products for purchase</TitleBasket>
      <h3>Total Price:{totalPrice}$</h3>

      <GoodsUl>
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
      </GoodsUl>
    </div>
  );
};
export default Basket;
