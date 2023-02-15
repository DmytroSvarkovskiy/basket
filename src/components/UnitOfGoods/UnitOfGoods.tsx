import { Goods } from '../../types';
import { Item, ItemImg, TextWrap, BuyBtn } from './UnitOfGoods.styled';

export const UnitOfGoods: React.FC<Goods> = ({
  id,
  name,
  price,
  avatar,
  remainder,
}) => {
  return (
    <Item id={id}>
      <ItemImg src={avatar} alt={name} />
      <TextWrap>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
        <p>Remainder:&nbsp;{remainder}</p>
      </TextWrap>
      <BuyBtn disabled>BUY</BuyBtn>
    </Item>
  );
};
