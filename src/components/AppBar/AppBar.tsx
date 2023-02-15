import { Container } from '../index';
import { Nav, Link, BasketIcon, ShopIcon } from './AppBar.styled';
export const AppBar: React.FC = () => {
  return (
    <header>
      <Container>
        <Nav>
          <Link to="/">
            <ShopIcon />
            Shop
          </Link>
          <Link to="/basket">
            <BasketIcon />
            Basket
          </Link>
        </Nav>
      </Container>
    </header>
  );
};
