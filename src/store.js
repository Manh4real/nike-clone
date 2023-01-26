import { configureStore } from "@reduxjs/toolkit";

import productsApi from "features/productsApi";
import userReducer from "features/user/userSlice";

import bagReducer from "./features/bag/bagSlice";

const store = configureStore({
  reducer: {
    bag: bagReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

export default store;
