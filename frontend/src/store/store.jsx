import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice.jsx";
import cartReducer from "../features/cartSlice.jsx";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});

export default store;