const { configureStore } = require("@reduxjs/toolkit");
import adoptedPet from "./adoptedPetSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
  },
});

export default store;
