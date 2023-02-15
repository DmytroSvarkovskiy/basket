import { Goods } from '../../types';
import { Item, ItemImg, TextWrap, BuyBtn } from './UnitOfGoods.styled';
import { addToBasket } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const UnitOfGoods: React.FC<Goods> = ({
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
  const handleClickToAdd = (id: string): void => {
    dispatch(addToBasket(id));
  };
  return (
    <Item id={id}>
      <ItemImg src={avatar} alt={name} />
      <TextWrap>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
        <p>Remainder:&nbsp;{remainder}</p>
      </TextWrap>
      <BuyBtn
        onClick={() => handleClickToAdd(id)}
        //   if the product is in the basket, we make the button inactive
        disabled={IsInBasket ? true : false}
      >
        {IsInBasket ? 'in the basket' : 'BUY'}
      </BuyBtn>
    </Item>
  );
};
