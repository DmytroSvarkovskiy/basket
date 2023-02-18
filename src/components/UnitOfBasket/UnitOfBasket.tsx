import { Goods } from '../../types';
import { Remainder, Item, ItemImg, TextWrap } from '../index';
import { toast } from 'react-toastify';
import {
  DeleteBtn,
  DeleteIcon,
  CountBtn,
  CountBasketWrap,
  RemainterBasket,
} from './UnitOfBasked.styled';
import { useState } from 'react';
import { deleteFromBasket, changeQuantity } from '../../redux';
import { useAppDispatch } from '../../hooks';

export const UnitOfBasket: React.FC<Goods> = ({
  id,
  name,
  price,
  avatar,
  remainder,
}) => {
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();

  // remove from basket
  const handleClickDelete = (id: string): void => {
    dispatch(deleteFromBasket(id));
    toast.info(`${name} has been removed from the basket`);
  };
  // change the quantity of the product
  const toAddCount = () => {
    setCount(prevCount => prevCount + 1);
    dispatch(changeQuantity({ id, operation: 'plus' }));
  };
  const toReduceClick = () => {
    setCount(prevCount => prevCount - 1);
    dispatch(changeQuantity({ id, operation: 'minus' }));
  };

  return (
    <Item id={id}>
      <ItemImg src={avatar} alt={name} draggable={false} />
      <TextWrap>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
      </TextWrap>
      <CountBasketWrap>
        {/* it is not possible to choose less than 1 product, for this we make the
        button inactive */}
        <CountBtn onClick={toReduceClick} disabled={count === 1 ? true : false}>
          -
        </CountBtn>
        <p>
          You buy:&nbsp;<span>{count}</span>
        </p>
        {/* you cannot select more products than are available */}
        <CountBtn
          onClick={toAddCount}
          disabled={count === Number(remainder) ? true : false}
        >
          +
        </CountBtn>
      </CountBasketWrap>
      {/* calculate and show the remainder */}
      <RemainterBasket>
        Remainter:&nbsp;<Remainder>{+remainder - count}</Remainder>{' '}
      </RemainterBasket>
      <DeleteBtn onClick={() => handleClickDelete(id)} title="delete">
        <DeleteIcon />
      </DeleteBtn>
    </Item>
  );
};
