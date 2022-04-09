import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { tokensReducer } from "../reducers/tokensReducer";
import { donorsReducer } from "../reducers/donorsReducer";
import { selectedDonorReducer } from "../reducers/selectedDonorReducer";
import { recipientsReducer } from "../reducers/recipientsReducer";
import { selectedRecipientReducer } from "../reducers/selectedRecipientReducer";
import { bloodBankReducer } from "../reducers/bloodBankReducer";
import { selectedBloodBankReducer } from "../reducers/selectedBloodBank";
import { hospitalReducer } from "../reducers/HospitalReducer";
import { doctorsReducer, usersReducer } from "../reducers/DoctorsReducer";
import { transfusionReducer } from "../reducers/transfusionReducer";
import { selectedTransfusionReducer } from "../reducers/selectedTransfusionReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  user: userReducer,
  tokens: tokensReducer,
  donors: donorsReducer,
  selectedDonor: selectedDonorReducer,
  recipients: recipientsReducer,
  selectedRecipient: selectedRecipientReducer,
  bloodBank: bloodBankReducer,
  selectedBloodBank: selectedBloodBankReducer,
  doctors: doctorsReducer,
  hospitals: hospitalReducer,
  transfusions: transfusionReducer,
  selectedTransfusion: selectedTransfusionReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
