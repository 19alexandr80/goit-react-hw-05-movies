import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<div>...loding</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
