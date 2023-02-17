import { Container } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToBasket } from '../../redux';
import { BallTriangle } from 'react-loader-spinner';
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
  // we determine the number of goods in the basket
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);
  const countGoodsInBasket = goodsInBasket.length;

  const isLoading = useAppSelector(state => state.commodityState.loading);

  // remove the default values so that the add to cart icon appears and add an id to stylize the cart when there is a product above it
  const dragOver = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.id = 'drop';
  };
  // add the product to the basket after releasing the left mouse button
  const drop = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.id = '';
    const dataId = e.dataTransfer.getData('id');
    dispatch(addToBasket(dataId));
  };
  // we pick it up when the product is not above the basket
  const dragLeave = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.currentTarget.id = '';
  };
  return (
    <header>
      <WrapHeader>
        <Container>
          <Nav>
            <Link to="/" draggable={false}>
              <ShopIcon />
              Shop
            </Link>
            {/* added loader} */}
            <BallTriangle
              height="40"
              width="40"
              color="#4fa94d"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              visible={isLoading}
            />
            <Link
              to="/basket"
              onDragOver={dragOver}
              onDrop={drop}
              onDragLeave={e => dragLeave(e)}
            >
              <BasketIcon />
              Basket
            </Link>
            {/* if there is a product in the basket, we show the quantity */}
            {countGoodsInBasket !== 0 && (
              <CountGoods>{countGoodsInBasket}</CountGoods>
            )}
          </Nav>
        </Container>
      </WrapHeader>
    </header>
  );
};
