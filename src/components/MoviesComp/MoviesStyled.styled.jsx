import styled from '@emotion/styled';

export const FormStyled = styled.form`
  margin-bottom: 24px;
  button {
    font-size: 20px;
    padding: 4px;
    margin-left: 12px;
    border-radius: 4px;
    background-color: aquamarine;
    :hover,
    : focus {
      background-color: mediumspringgreen;
      cursor: pointer;
    }
    :active {
      background-color: green;
    }
  }
  input {
    font-size: 20px;
    padding: 4px;
    margin-left: 16px;
    border-radius: 4px;
  }
`;
