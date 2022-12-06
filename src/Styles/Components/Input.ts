import styled from 'styled-components';

export const Input = styled.input`
  height: 3rem;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;

  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: 15px;
  }
`;
export const InputSmall = styled.input`
  height: 3rem;
  width: 48%;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;

  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: 15px;
  }
`;
