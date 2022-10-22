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
  FormTitle,
  FormRowWrapper,
} from '../Styles/Form';

import { Input } from '../Styles/Components/Input';
import { Button } from '../Styles/Components/Button';

function Form(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <ContentWrapper>
        <LeftWrapper>
          <BackButton> Voltar para o site </BackButton>
          <TextFieldWrapper>
            <Title>Solicite aqui o seu crédito</Title>
            <Text>Este é um texto</Text>
          </TextFieldWrapper>
        </LeftWrapper>
        <RightWrapper>
          <FormContainer>
            <FormTitle>Precisamos conhecer você melhor</FormTitle>
            <Input placeholder={'Nome completos'} />
            <FormRowWrapper>
              <Input placeholder={'CPF'} />
              <Input placeholder={'Data de Nascimento'} />
            </FormRowWrapper>
            <Input placeholder={'Seu melhor e-mail'} />
            <Input placeholder={'Número de celular'} />
            <Button>Próximo</Button>
            <p
              style={{
                fontFamily: 'Ubuntu',
                cursor: 'pointer',
              }}
            >
              Já possui uma proposta de crédito em andamento? clique aqui
            </p>
          </FormContainer>
        </RightWrapper>
      </ContentWrapper>
    </Container>
  );
}

export { Form };
