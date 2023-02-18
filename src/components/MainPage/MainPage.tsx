import { useAppSelector } from '../../hooks';
import { UnitOfGoodsMain } from '../index';
import { Title, GoodsUl, MainWrap } from './MainPage.styled';
export const MainPage: React.FC = () => {
  const goodsList = useAppSelector(state => state.commodityState.goodsList);
  const error = useAppSelector(state => state.commodityState.error);
  return (
    <MainWrap>
      <Title>
        {error
          ? 'Something went wrong, please try again'
          : 'Wellcome to our shop! Сhoose the product you like'}
      </Title>
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
    </MainWrap>
  );
};
