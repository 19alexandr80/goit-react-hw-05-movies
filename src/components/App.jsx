import { Routes, NavLink, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/collect">Collection</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>HOME PAGE</div>} />
        <Route path="/collect" element={<div>COLLECTION</div>} />
      </Routes>
      React homework template
    </div>
  );
};
