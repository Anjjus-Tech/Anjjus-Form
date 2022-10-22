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
import { ProgressBar1 } from './Components/ProgressBar1';
import { ProgressBar2 } from './Components/ProgressBar2';
import { StepOne } from './Forms/StepOne';
import { StepTwo } from './Forms/StepTwo';

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
            <StepTwo />
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
