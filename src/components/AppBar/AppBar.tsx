import { Container } from '../index';
import { useAppDispatch } from '../../hooks';
import { addToBasket } from '../../redux';
import { Nav, Link, BasketIcon, ShopIcon } from './AppBar.styled';
export const AppBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const dragOver = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.id = 'drop';
  };
  const drop = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.id = '';
    const dataId = e.dataTransfer.getData('id');
    if (dataId.includes('id')) {
      dispatch(addToBasket(dataId));
    }
  };
  const dragLeave = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.currentTarget.id = '';
  };
  return (
    <header>
      <Container>
        <Nav>
          <Link to="/">
            <ShopIcon />
            Shop
          </Link>
          <Link
            to="/basket"
            onDragOver={dragOver}
            onDrop={drop}
            onDragLeave={e => dragLeave(e)}
          >
            <BasketIcon />
            Basket
          </Link>
        </Nav>
      </Container>
    </header>
  );
};
