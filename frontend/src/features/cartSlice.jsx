import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import { clearCartFromLocalStorage, loadCartFromLocalStorage, saveCartToLocalStorage } from "../utils/localStorageUtils.jsx";

const defaultState = {
    cartItems: [],
    totalItems: 0,
    totalAmount: 0,
};

const initialState = loadCartFromLocalStorage() || defaultState;

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((product) => product.id === item.id);
            if(existingItem) existingItem.quantity += 1;
            else state.cartItems.push({...item, quantity: 1});

            state.totalItems += 1;
            state.totalAmount += item.price;

            saveCartToLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            const product = action.payload;
            const item = state.cartItems.find((p) => p.id === product.id);

            if(!item) return;

            state.totalItems -= item.quantity;
            state.totalAmount -= item.price * item.quantity;
            state.cartItems = state.cartItems.filter((p) => p.id !== product.id);

            saveCartToLocalStorage(state);
        },
        increaseItem: (state, action) => {
            const product = action.payload;
            const item = state.cartItems.find((p) => p.id === product.id);
            if(!item) return;

            item.quantity += 1;
            state.totalItems += 1;
            state.totalAmount += item.price;

            saveCartToLocalStorage(state);
        },
        decreaseItem: (state, action) => {
            const product = action.payload;
            const item = state.cartItems.find((p) => p.id === product.id);
            if(!item) return;

            if(item.quantity === 1) {
                state.cartItems = state.cartItems.filter((p) => p.id !== product.id);
                toast.info('Item removed from cart.');
            }
            else
                item.quantity -= 1;

            state.totalItems -= 1;
            state.totalAmount -= item.price;

            saveCartToLocalStorage(state);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalItems = 0;

            clearCartFromLocalStorage();
        }
    }
});

export const {addToCart, removeFromCart, increaseItem, decreaseItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;