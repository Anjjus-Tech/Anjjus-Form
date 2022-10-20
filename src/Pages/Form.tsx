import React from 'react';
import {
  Container,
  FormContainer,
  LeftWrapper,
  RightWrapper,
  Title,
  Text,
  BackButton,
  TextFieldWrapper,
  Header,
  ContentWrapper,
} from '../Styles/Form';

function Form(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <ContentWrapper>
        <LeftWrapper>
          <BackButton> Voltar para o site </BackButton>
          <TextFieldWrapper>
            <Title>Este é um titulo</Title>
            <Text>Este é um texto</Text>
          </TextFieldWrapper>
        </LeftWrapper>
        <RightWrapper>
          <h1
            style={{
              color: 'white',
            }}
          >
            hello direita
          </h1>
          <FormContainer></FormContainer>
        </RightWrapper>
      </ContentWrapper>
    </Container>
  );
}

export { Form };
