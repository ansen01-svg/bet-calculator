import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app_slice";

const store = configureStore({
  reducer: {
    appReducer: appReducer,
  },
});

export default store;
