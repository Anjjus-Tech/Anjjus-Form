import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState: ClientInfoInputType = {
  address: {
    city: null,
    complement: null,
    country: null,
    district: null,
    number: null,
    postcode: null,
    stateCode: null,
    streetAddress: null,
  },
  externalBankAccount: null,
  pix: null,
  birth_date: null,
  cellphone: null,
  cpf: null,
  email: null,
  identification_doc_number: null,
  identification_doc_type: null,
  issue_date: null,
  issuer: null,
  marital_status: null,
  name: null,
  occupation: null,
  sex: null,
}

const formSlice = createSlice({
  name: "formSlice",
  initialState: initState,
  reducers: {
    fillPersonalInfo: (state, action:PayloadAction<ClientInfoInputType>) => {
      state = {...action.payload}
    },
    fillAddressInfo: (state, action:PayloadAction<AddressInpType>) => {
      state.address = {...action.payload}
    },
    fillExternalBankAccountInfo: (state, action:PayloadAction<ExternalBankAccountInputType>) => {
      state.externalBankAccount = {...action.payload}
    },
    fillpixtInfo: (state, action:PayloadAction<PixInputType>) => {
      state.pix = {...action.payload}
    },
  },
});

export const formReducer = formSlice.reducer

export const {
  fillAddressInfo,
  fillExternalBankAccountInfo,
  fillPersonalInfo,
  fillpixtInfo,
} = formSlice.actions;
