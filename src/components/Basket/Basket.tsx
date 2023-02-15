import { useAppSelector, useAppDispatch } from '../../hooks';

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);

  return <div>Basket</div>;
};
export default Basket;
