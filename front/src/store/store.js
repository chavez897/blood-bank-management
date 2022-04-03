import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { tokensReducer } from "../reducers/tokensReducer";
import { donorsReducer } from "../reducers/donorsReducer";
import { selectedDonorReducer } from "../reducers/selectedDonorReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  user: userReducer,
  tokens: tokensReducer,
  donors: donorsReducer,
  selectedDonor: selectedDonorReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
