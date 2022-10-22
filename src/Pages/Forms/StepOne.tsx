import React from 'react';
import { FormRowWrapper, FormTitle } from './StepOne.style';
import { Input } from '../../Styles/Components/Input';
import { ProgressBar1 } from '../Components/ProgressBar1';

function StepOne(): JSX.Element {
  return (
    <>
      <ProgressBar1 />
      <FormTitle>Precisamos conhecer você melhor</FormTitle>
      <Input placeholder={'Nome completos'} />
      <FormRowWrapper>
        <Input placeholder={'CPF'} />
        <Input placeholder={'Data de Nascimento'} />
      </FormRowWrapper>
      <Input placeholder={'Seu melhor e-mail'} />
      <FormRowWrapper>
        <Input placeholder={'Número de celular'} />
        <Input placeholder={'Sexo'} />
      </FormRowWrapper>
      <FormRowWrapper>
        <Input placeholder={'Tipo de documento'} />
        <Input placeholder={'Numero do documento'} />
      </FormRowWrapper>
      <FormRowWrapper>
        <Input placeholder={'Orgão emissor'} />
        <Input placeholder={'Data de expedição'} />
      </FormRowWrapper>
    </>
  );
}

export { StepOne };
