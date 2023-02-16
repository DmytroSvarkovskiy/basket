import { Container } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToBasket } from '../../redux';
import {
  Nav,
  Link,
  BasketIcon,
  ShopIcon,
  WrapHeader,
  CountGoods,
} from './AppBar.styled';
export const AppBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const countGoodsInBasket = goodsInBasket.length;

  const dragOver = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.id = 'drop';
  };
  const drop = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.id = '';
    const dataId = e.dataTransfer.getData('id');
    dispatch(addToBasket(dataId));
  };
  const dragLeave = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.currentTarget.id = '';
  };
  return (
    <header>
      <WrapHeader>
        <Container>
          <Nav>
            <Link to="/">
              <ShopIcon />
              Shop
            </Link>
            <Link
              to="/basket"
              onDragOver={dragOver}
              onDrop={drop}
              onDragLeave={e => dragLeave(e)}
            >
              <BasketIcon />
              Basket
            </Link>
            {countGoodsInBasket !== 0 && (
              <CountGoods>{countGoodsInBasket}</CountGoods>
            )}
          </Nav>
        </Container>
      </WrapHeader>
    </header>
  );
};
