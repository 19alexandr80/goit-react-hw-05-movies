import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home page</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>...loding</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
