import { Container } from '../index';
import { Nav, Link } from './AppBar.styled';
export const AppBar: React.FC = () => {
  return (
    <header>
      <Container>
        <Nav>
          <Link to="/">Shop</Link>
          <Link to="/basket">Basket</Link>
        </Nav>
      </Container>
    </header>
  );
};
