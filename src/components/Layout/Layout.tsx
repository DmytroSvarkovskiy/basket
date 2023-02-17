import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Container } from '../index';

export const Layout: React.FC = () => {
  return (
    <>
      <AppBar />
      <main>
        <section>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <footer>
        <Container></Container>
      </footer>
    </>
  );
};
