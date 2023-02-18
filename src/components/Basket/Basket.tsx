import { useAppSelector } from '../../hooks';
import { GoodsUl } from '../index';
import {
  TitleBasket,
  BasketWrap,
  OrderBtn,
  InfoOrderWrap,
} from './Basket.styled';
import { UnitOfBasket } from '../index';

const Basket: React.FC = () => {
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const totalPrice = goodsInBasket.reduce(
    (acc, item) => item.quantity * item.price + acc,
    0
  );

  return (
    <BasketWrap>
      {/* if the goods are not in the basket, we display this information */}
      {goodsInBasket.length === 0 ? (
        //  {/* disable the ability to drag items in the basket */}
        <TitleBasket draggable={false}>
          You have not added any products to the basket
        </TitleBasket>
      ) : (
        <>
          {/* if the goods in the basket */}
          <TitleBasket draggable={false}>Complete your purchase</TitleBasket>
          <InfoOrderWrap>
            {' '}
            <h3>Total Price:&nbsp;{totalPrice}$</h3>
            <h3>Goods in the basket:&nbsp;{goodsInBasket.length}</h3>
            <OrderBtn>To order</OrderBtn>
          </InfoOrderWrap>
        </>
      )}
      <GoodsUl>
        {/* map the list of products and dynamically create cards with products */}
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
    </BasketWrap>
  );
};
export default Basket;
