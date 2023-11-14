import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authenticationSlice from "../Features/authentication/authenticationSlice";
import { authApi } from "../Features/authentication/authenticationApi";
import authReducer from "../Features/authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
