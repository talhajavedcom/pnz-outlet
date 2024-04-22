import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// creating store and integrating with cart slice:
const store = configureStore({
    reducer:{
        cartSlice
    }
})

export default store;