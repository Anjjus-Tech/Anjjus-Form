import React from 'react';
import { ProgressBar2 } from '../Components/ProgressBar2';
import { FormRowWrapper, FormTitle } from './StepTwo.style';
import { Input } from '../../Styles/Components/Input';

function StepTwo(): JSX.Element {
  return (
    <>
      <ProgressBar2 />
      <FormTitle>step two</FormTitle>
      <FormRowWrapper>
        <Input placeholder={'CEP'} />
        <Input placeholder={'Rua'} />
      </FormRowWrapper>
      <FormRowWrapper>
        <Input placeholder={'Número'} />
        <Input placeholder={'País'} />
      </FormRowWrapper>
      <FormRowWrapper>
        <Input placeholder={'UF'} />
        <Input placeholder={'Sexo'} />
      </FormRowWrapper>
      <FormRowWrapper>
        <Input placeholder={'Complemento'} />
        <Input placeholder={'Numero do documento'} />
      </FormRowWrapper>
      <FormRowWrapper>
        <Input placeholder={'Cidade'} />
        <Input placeholder={'Bairro'} />
      </FormRowWrapper>
    </>
  );
}

export { StepTwo };
