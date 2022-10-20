import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #e9f0f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  width: 100%;
  height: 12vh;
  background-color: white;
`;

// Text side

export const LeftWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const BackButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: #235c94;
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
`;

export const TextFieldWrapper = styled.div`
  border: 1px solid white;
  height: 45rem;
  width: 35rem;
`;

export const Title = styled.h1`
  color: white;
`;

export const Text = styled.p`
  color: white;
`;

// Form side

export const RightWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;

export const FormContainer = styled.div`
  background-color: white;
  height: 45rem;
  width: 35rem;
  border-radius: 8px;
`;
