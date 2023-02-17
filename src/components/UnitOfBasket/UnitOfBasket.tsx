import { Goods } from '../../types';
import {
  ItemBasket,
  ItemImgBasket,
  TextWrapBasket,
  DeleteBtn,
  DeleteIcon,
  CountBtn,
  CountBasketWrap,
  RemainterBasket,
} from './UnitOfBasked.styled';
import { useState } from 'react';
import { deleteFromBasket } from '../../redux';
import { useAppDispatch } from '../../hooks';
type PropsPrice = {
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};
export const UnitOfBasket: React.FC<Goods & PropsPrice> = ({
  id,
  name,
  price,
  avatar,
  remainder,
  setTotalPrice,
}) => {
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();

  // remove from basket
  const handleClickDelete = (id: string): void => {
    dispatch(deleteFromBasket(id));
  };
  // change the quantity of the product
  const toAddCount = () => {
    setCount(prevCount => prevCount + 1);
    setTotalPrice(prevState => prevState + price);
  };
  const toReduceClick = () => {
    setCount(prevCount => prevCount - 1);
    setTotalPrice(prevState => prevState - price);
  };

  return (
    <ItemBasket id={id}>
      <ItemImgBasket src={avatar} alt={name} draggable={false} />
      <TextWrapBasket>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
      </TextWrapBasket>
      <CountBasketWrap>
        <CountBtn onClick={toReduceClick} disabled={count === 1 ? true : false}>
          -
        </CountBtn>

        <p>
          You buy:&nbsp;<span>{count}</span>
        </p>
        <CountBtn
          onClick={toAddCount}
          disabled={count === Number(remainder) ? true : false}
        >
          +
        </CountBtn>
      </CountBasketWrap>
      <RemainterBasket>Remainter: &nbsp;{+remainder - count}</RemainterBasket>
      <DeleteBtn onClick={() => handleClickDelete(id)} title="delete">
        <DeleteIcon />
      </DeleteBtn>
    </ItemBasket>
  );
};
