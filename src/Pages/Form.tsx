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
import { useAppSelector } from '../hooks';

function Form(): JSX.Element {

  const actualStep = useAppSelector(state => state.formReducer.step)

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
            {actualStep === 1 && <StepOne />}
            {actualStep === 2 && <StepTwo />}

          </FormContainer>
        </RightWrapper>
      </ContentWrapper>
    </Container>
  );
}

export { Form };
