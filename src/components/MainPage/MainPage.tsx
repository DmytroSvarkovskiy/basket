import { useAppSelector } from '../../hooks';
import { UnitOfGoodsMain } from '../index';
import { Title, GoodsUl } from './MainPage.styled';

export const MainPage: React.FC = () => {
  const goodsList = useAppSelector(state => state.commodityState.goodsList);

  return (
    <div>
      <Title>Wellcome to our shop! Сhoose the product you like </Title>
      <GoodsUl>
        {goodsList.map(({ id, name, price, avatar, remainder }) => {
          return (
            <UnitOfGoodsMain
              key={id}
              id={id}
              name={name}
              price={price}
              avatar={avatar}
              remainder={remainder}
            />
          );
        })}
      </GoodsUl>
    </div>
  );
};
