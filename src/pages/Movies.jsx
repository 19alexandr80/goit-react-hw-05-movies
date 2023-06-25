import { useState } from 'react';

const Movies = () => {
  const [name, setName] = useState('');
  const formSubmit = e => {
    e.preventDefault();
    if (!name) {
      alert('name please');
      return;
    }
    // onSubmit(name);
    setName('');
  };
  return (
    <form onSubmit={formSubmit}>
      <button>Find</button>
      <input type="text" />
    </form>
  );
};
export default Movies;
