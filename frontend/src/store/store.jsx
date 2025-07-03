import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice.jsx";

const store = configureStore({
    reducer: {
        products: productsReducer,
    }
});

export default store;