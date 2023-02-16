import { Goods } from '../../types';
import {
  ItemBasket,
  ItemImgBasket,
  TextWrapBasket,
  DeleteBtn,
  DeleteIcon,
} from './UnitOfBasked.styled';
import { useState } from 'react';
import { deleteFromBasket } from '../../redux';
import { useAppDispatch } from '../../hooks';

type Price = {
  calculationPrice: React.Dispatch<React.SetStateAction<number>>;
};
export const UnitOfBasket: React.FC<Goods & Price> = ({
  id,
  name,
  price,
  avatar,
  remainder,
  calculationPrice,
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
    calculationPrice(prevPrice => prevPrice + price);
  };
  const toReduceClick = () => {
    setCount(prevCount => prevCount - 1);
    calculationPrice(prevPrice => prevPrice - price);
  };

  return (
    <ItemBasket id={id}>
      <ItemImgBasket src={avatar} alt={name} draggable={false} />
      <TextWrapBasket>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
      </TextWrapBasket>
      <div>
        <button
          onClick={toAddCount}
          disabled={count === +remainder ? true : false}
        >
          +
        </button>
        <p>
          You buy:&nbsp;<span>{count}</span>
        </p>
        <button onClick={toReduceClick} disabled={count === 0 ? true : false}>
          -
        </button>
      </div>
      <p>Remainter: &nbsp;{+remainder - count}</p>
      <DeleteBtn onClick={() => handleClickDelete(id)}>
        <DeleteIcon />
      </DeleteBtn>
    </ItemBasket>
  );
};
