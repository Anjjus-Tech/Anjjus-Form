import React from 'react';
import { ErrorMsg, FormRowWrapper, FormTitle, FromWrapper, InputWrapper } from './StepOne.style';
import { Input } from '../../Styles/Components/Input';
import { ProgressBar1 } from '../Components/ProgressBar1';
import { Button } from '../../Styles/Components/Button';
import { useAppDispatch } from '../../hooks';
import { changeStep } from '../../store/slices/formSlice';
import { useForm } from 'react-hook-form';

function StepOne(): JSX.Element {

  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(changeStep(2));
  }

  return (
    <FromWrapper onSubmit={handleSubmit(onSubmit)}>
      <ProgressBar1 />
      <FormTitle>Precisamos conhecer você melhor</FormTitle>
      <InputWrapper>
        <Input placeholder={'Nome completo'} onMouseOver={() => {clearErrors("name")}}{
          ...register("name", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.name && (<ErrorMsg>{errors.name.message as string}</ErrorMsg>)}
      </InputWrapper>
      <FormRowWrapper>
        <InputWrapper>
        <Input placeholder={'CPF'} onMouseOver={() => {clearErrors("cpf")}} {
          ...register("cpf", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.cpf && (<ErrorMsg>{errors.cpf.message as string}</ErrorMsg>)}
        </InputWrapper>
        <InputWrapper>
        <Input placeholder={'Data de Nascimento'} onMouseOver={() => {clearErrors("birthDate")}} {
          ...register("birthDate", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.birthDate && (<ErrorMsg>{errors.birthDate.message as string}</ErrorMsg>)}
        </InputWrapper>
      </FormRowWrapper>
      <InputWrapper>
        <Input placeholder={'Seu melhor e-mail'} onMouseOver={() => {clearErrors("email")}} {
          ...register("email", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.email && (<ErrorMsg>{errors.email.message as string}</ErrorMsg>)}
      </InputWrapper>
      <FormRowWrapper>
      <InputWrapper>
        <Input placeholder={'Número de celular'} onMouseOver={() => {clearErrors("phone")}} {
          ...register("phone", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.phone && (<ErrorMsg>{errors.phone.message as string}</ErrorMsg>)}
      </InputWrapper>
      <InputWrapper>
        <Input placeholder={'Sexo'} onMouseOver={() => {clearErrors("sex")}} {
          ...register("sex", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.sex && (<ErrorMsg>{errors.sex.message as string}</ErrorMsg>)}
      </InputWrapper>
      </FormRowWrapper>
      <FormRowWrapper>
      <InputWrapper>
        <Input placeholder={'Tipo de documento'} onMouseOver={() => {clearErrors("identificationDocType")}} {
          ...register("identificationDocType", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.identificationDocType && (<ErrorMsg>{errors.identificationDocType.message as string}</ErrorMsg>)}
      </InputWrapper>
      <InputWrapper>
        <Input placeholder={'Numero do documento'} onMouseOver={() => {clearErrors("identificationDocNumber")}} {
          ...register("identificationDocNumber", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.identificationDocNumber && (<ErrorMsg>{errors.identificationDocNumber.message as string}</ErrorMsg>)}
      </InputWrapper>
      </FormRowWrapper>
      <FormRowWrapper>
      <InputWrapper>
        <Input placeholder={'Orgão emissor'} onMouseOver={() => {clearErrors("issuer")}} {
          ...register("issuer", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.issuer && (<ErrorMsg>{errors.issuer.message as string}</ErrorMsg>)}
      </InputWrapper>
      <InputWrapper>
        <Input placeholder={'Data de expedição'} onMouseOver={() => {clearErrors("issueDate")}} {
          ...register("issueDate", {
            required: "Esse campo é obrigatório" 
          }
        )} />
        {errors && errors.issueDate && (<ErrorMsg>{errors.issueDate.message as string}</ErrorMsg>)}
      </InputWrapper>
      </FormRowWrapper>
      <Button type='submit'>Próximo</Button>
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
