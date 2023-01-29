import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./adoptedPetSlice";
import searchParams from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
  },
});

export default store;
