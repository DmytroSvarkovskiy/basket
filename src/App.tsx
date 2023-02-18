import { GlobalStyle } from './globalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import { getGoodsFetch } from './redux';
import { useEffect, lazy } from 'react';
import { Layout, MainPage } from './components';

const Basket = lazy(() => import('./components/'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGoodsFetch());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} position="top-center" />
      <GlobalStyle />
    </div>
  );
};

export default App;
