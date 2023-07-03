import { FormStyled } from 'components/MoviesComp/MoviesStyled.styled';

export const MoviesForm = ({ formSubmit, inputChange, searchParams }) => {
  return (
    <FormStyled onSubmit={formSubmit}>
      <button>Find</button>
      <input
        type="text"
        onChange={inputChange}
        value={searchParams ? searchParams : ''}
      />
    </FormStyled>
  );
};
