import { FormStyled } from 'components/MoviesComp/MoviesStyled.styled';
import PropTypes from 'prop-types';

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

MoviesForm.propTypes = {
  searchParams: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
};
