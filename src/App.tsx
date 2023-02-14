import { GlobalStyle } from './globalStyle';
import { useAppDispatch, useAppSelector } from './hooks';
import { getGoodsFetch } from './redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const goodsList = useAppSelector(state => state.commodityState.goodsList);
  useEffect(() => {
    dispatch(getGoodsFetch());
  }, [dispatch]);
  console.log(goodsList);

  return (
    <div>
      <GlobalStyle />
    </div>
  );
}

export default App;
