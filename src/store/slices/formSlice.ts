import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState: FormStateType= {
  client: {
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
  },
  step: 1
}

const formSlice = createSlice({
  name: "formSlice",
  initialState: initState,
  reducers: {
    fillPersonalInfo: (state, action:PayloadAction<ClientInfoInputType>) => {
      state.client = {...action.payload}
    },
    fillAddressInfo: (state, action:PayloadAction<AddressInpType>) => {
      state.client.address = {...action.payload}
    },
    fillExternalBankAccountInfo: (state, action:PayloadAction<ExternalBankAccountInputType>) => {
      state.client.externalBankAccount = {...action.payload}
    },
    fillpixtInfo: (state, action:PayloadAction<PixInputType>) => {
      state.client.pix = {...action.payload}
    },
    changeStep: (state, action:PayloadAction<number>) => {
      state.step = action.payload
    }
  },
});

export const formReducer = formSlice.reducer

export const {
  fillAddressInfo,
  fillExternalBankAccountInfo,
  fillPersonalInfo,
  fillpixtInfo,
} = formSlice.actions;
