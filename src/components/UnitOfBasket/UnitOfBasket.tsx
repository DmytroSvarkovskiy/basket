import { Goods } from '../../types';
import {
  ItemBasket,
  ItemImgBasket,
  TextWrapBasket,
  DeleteBtn,
} from './UnitOfBasked.styled';
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
    <ItemBasket id={id}>
      <ItemImgBasket src={avatar} alt={name} draggable={false} />
      <TextWrapBasket>
        <p>Name:&nbsp;{name}</p>
        <p>Price:&nbsp;{price}$</p>
        <p>Remainder:&nbsp;{remainder}</p>
      </TextWrapBasket>
      <DeleteBtn onClick={() => handleClickDelete(id)}>DELETE</DeleteBtn>
    </ItemBasket>
  );
};
