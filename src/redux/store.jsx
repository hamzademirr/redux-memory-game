import { configureStore } from "@reduxjs/toolkit";
import memoryCardReducer from "./memoryCardSlice";
export const Store = configureStore({
  reducer: {
    memoryCard: memoryCardReducer,
  },
});
