import React from 'react';
import {
  ErrorMsg,
  InputRowWrapper,
  FormTitle,
  FromWrapper,
  InputWrapper,
} from './StepOne.style';
import { Input, InputSmall } from '../../Styles/Components/Input';
import { ProgressBar1 } from '../Components/ProgressBar1';
import { Button } from '../../Styles/Components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeStep, fillPersonalInfo } from '../../store/slices/formSlice';
import { useForm } from 'react-hook-form';

function StepOne(): JSX.Element {
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.formReducer.client);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(fillPersonalInfo(data));
    dispatch(changeStep(2));
  };

  return (
    <FromWrapper onSubmit={handleSubmit(onSubmit)}>
      <ProgressBar1 />
      <FormTitle>Precisamos conhecer você melhor</FormTitle>
      <InputWrapper>
        <Input
          placeholder={'Nome completo'}
          defaultValue={client.name || ''}
          onMouseOver={() => {
            clearErrors('name');
          }}
          {...register('name', {
            required: 'Esse campo é obrigatório',
          })}
        />
        {errors && errors.name && (
          <ErrorMsg>{errors.name.message as string}</ErrorMsg>
        )}
        <InputRowWrapper>
          <InputSmall
            placeholder={'CPF'}
            defaultValue={client.cpf || ''}
            onMouseOver={() => {
              clearErrors('cpf');
            }}
            {...register('cpf', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.cpf && (
            <ErrorMsg>{errors.cpf.message as string}</ErrorMsg>
          )}
          <InputSmall
            placeholder={'Data de Nascimento'}
            defaultValue={client.birthDate || ''}
            onMouseOver={() => {
              clearErrors('birthDate');
            }}
            {...register('birthDate', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.birthDate && (
            <ErrorMsg>{errors.birthDate.message as string}</ErrorMsg>
          )}
        </InputRowWrapper>
        <Input
          placeholder={'Seu melhor e-mail'}
          defaultValue={client.email || ''}
          onMouseOver={() => {
            clearErrors('email');
          }}
          {...register('email', {
            required: 'Esse campo é obrigatório',
          })}
        />
        {errors && errors.email && (
          <ErrorMsg>{errors.email.message as string}</ErrorMsg>
        )}
        <InputRowWrapper>
          <InputSmall
            placeholder={'Número de celular'}
            defaultValue={client.cellphone || ''}
            onMouseOver={() => {
              clearErrors('phone');
            }}
            {...register('cellphone', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.cellphone && (
            <ErrorMsg>{errors.cellphone.message as string}</ErrorMsg>
          )}
          <InputSmall
            placeholder={'Sexo'}
            defaultValue={client.sex || ''}
            onMouseOver={() => {
              clearErrors('sex');
            }}
            {...register('sex', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.sex && (
            <ErrorMsg>{errors.sex.message as string}</ErrorMsg>
          )}
        </InputRowWrapper>
        <InputRowWrapper>
          <InputSmall
            placeholder={'Tipo de documento'}
            defaultValue={client.identificationDocType || ''}
            onMouseOver={() => {
              clearErrors('identificationDocType');
            }}
            {...register('identificationDocType', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.identificationDocType && (
            <ErrorMsg>
              {errors.identificationDocType.message as string}
            </ErrorMsg>
          )}
          <InputSmall
            placeholder={'Numero do documento'}
            defaultValue={client.identificationDocNumber || ''}
            onMouseOver={() => {
              clearErrors('identificationDocNumber');
            }}
            {...register('identificationDocNumber', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.identificationDocNumber && (
            <ErrorMsg>
              {errors.identificationDocNumber.message as string}
            </ErrorMsg>
          )}
        </InputRowWrapper>
        <InputRowWrapper>
          <InputSmall
            placeholder={'Orgão emissor'}
            defaultValue={client.issuer || ''}
            onMouseOver={() => {
              clearErrors('issuer');
            }}
            {...register('issuer', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.issuer && (
            <ErrorMsg>{errors.issuer.message as string}</ErrorMsg>
          )}
          <InputSmall
            placeholder={'Data de expedição'}
            defaultValue={client.issueDate || ''}
            onMouseOver={() => {
              clearErrors('issueDate');
            }}
            {...register('issueDate', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors && errors.issueDate && (
            <ErrorMsg>{errors.issueDate.message as string}</ErrorMsg>
          )}
        </InputRowWrapper>
      </InputWrapper>
      <Button type="submit">Próximo</Button>
      <p
        style={{
          fontFamily: 'Ubuntu',
          cursor: 'pointer',
        }}
      >
        Já possui uma proposta de crédito em andamento? clique aqui
      </p>
    </FromWrapper>
  );
}

export { StepOne };
