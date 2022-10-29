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
  birth_date: string | null,
  cpf: string | null,
  cellphone: string | null,
  marital_status:string | null,
  identification_doc_type: string | null,
  identification_doc_number: string | null,
  issuer: string | null,
  issue_date: string | null,
  sex: string | null,
  occupation: string | null,
}
