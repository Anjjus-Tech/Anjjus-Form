type AddressInpType = {
  streetAddress : string | null,
  district: string | null,
  city: string | null,
  number: number | null,
  complement: string | null,
  stateCode: string | null,
  country: string | null,
  postcode: string | null
}

type ExternalBankAccountInputType = {
  bankCode: string | null,
  bankAccount : string | null,
  bankAccountDigit: string | null,
  bankBranch: string | null
}

type PixInputType = {
  key: string | null,
  keytype: string | null
}

type ClientInfoInputType = {
  address: AddressInpType,
  externalBankAccount: ExternalBankAccountInputType | null,
  pix: PixInputType | null,
  name: string | null,
  email: string | null,
  birthDate: string | null,
  cpf: string | null,
  cellphone: string | null,
  maritalStatus:string | null,
  identificationDocType: string | null,
  identificationDocNumber: string | null,
  issuer: string | null,
  issueDate: string | null,
  sex: string | null,
  occupation: string | null,
}

type FormStateType = {
  client: ClientInfoInputType,
  step: number,
}
