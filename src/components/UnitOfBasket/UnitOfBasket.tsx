import { Goods } from '../../types';
import {
  Item,
  ItemImg,
  TextWrap,
  BuyBtn,
} from '../UnitOfGoodsMain/UnitOfGoodsMain.styled';
import { deleteFromBasket } from '../../redux';
import { useAppDispatch } from '../../hooks';

export const UnitOfBasket: React.FC<Goods> = ({
  id,
  name,
  price,
  avatar,
  remainder,
}) => {
  const dispatch = useAppDispatch();

  // remove from basket
  const handleClickDelete = (id: string): void => {
    dispatch(deleteFromBasket(id));
  };
  return (
    <Item id={id}>
      <ItemImg src={avatar} alt={name} draggable={false} />
      <TextWrap>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
        <p>Remainder:&nbsp;{remainder}</p>
      </TextWrap>
      <BuyBtn onClick={() => handleClickDelete(id)}>DELETE</BuyBtn>
    </Item>
  );
};
