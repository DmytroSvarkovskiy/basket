import { GlobalStyle } from './globalStyle';
import { useAppDispatch } from './hooks';
import { getGoodsFetch } from './redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGoodsFetch());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
    </div>
  );
}

export default App;
