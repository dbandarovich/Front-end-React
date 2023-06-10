import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import RegistrationReducer from "./reducers/RegistrationReducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    registration: RegistrationReducer,
  },
});
