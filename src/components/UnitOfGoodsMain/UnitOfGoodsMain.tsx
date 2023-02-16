import { Goods } from '../../types';
import {
  Item,
  ItemImg,
  TextWrap,
  BuyBtn,
  Remainder,
} from './UnitOfGoodsMain.styled';
import { addToBasket } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const UnitOfGoodsMain: React.FC<Goods> = ({
  id,
  name,
  price,
  avatar,
  remainder,
}) => {
  const dispatch = useAppDispatch();

  // list of products in the basket
  const goodsInBasket = useAppSelector(state => state.commodityState.basket);

  // check whether the product is in the basket
  const IsInBasket = goodsInBasket.find(item => item.id === id);

  // add to basket function
  const handleClickToBuy = (id: string): void => {
    dispatch(addToBasket(id));
  };

  // add a drop function
  const dragStart = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    e.dataTransfer.setData('id', id);
  };

  const dragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  return (
    <Item
      id={id}
      draggable={IsInBasket ? false : true}
      onDragStart={e => dragStart(e, id)}
      onDragOver={dragOver}
    >
      <ItemImg src={avatar} alt={name} draggable={false} />
      <TextWrap>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
        <p>
          Remainder:&nbsp;
          <Remainder>{IsInBasket ? +remainder - 1 + '' : remainder}</Remainder>
        </p>
      </TextWrap>

      <BuyBtn
        onClick={() => handleClickToBuy(id)}
        //   if the product is in the basket, we make the button inactive
        disabled={IsInBasket || +remainder <= 0 ? true : false}
      >
        {IsInBasket ? 'in the basket' : 'BUY'}
      </BuyBtn>
    </Item>
  );
};
