import { configureStore } from "@reduxjs/toolkit";
import trainerReducer from "../redux/trainerSlice";

export const store = configureStore({
  reducer: {
    trainers: trainerReducer,
  },
});
