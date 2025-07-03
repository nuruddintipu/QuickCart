import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalAmount: 0,
};

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
        },
        removeFromCart: (state, action) => {
            const product = action.payload;
            const item = state.cartItems.find((p) => p.id === product.id);

            if(!item) return;

            state.totalItems -= item.quantity;
            state.totalAmount -= item.price * item.quantity;
            state.cartItems = state.cartItems.filter((p) => p.id !== product.id);
        },
        increaseItem: (state, action) => {
            const product = action.payload;
            const item = state.cartItems.find((p) => p.id === product.id);
            if(!item) return;

            item.quantity += 1;
            state.totalItems += 1;
            state.totalAmount += item.price;
        },
        decreaseItem: (state, action) => {
            const product = action.payload;
            const item = state.cartItems.find((p) => p.id === product.id);
            if(!item) return;

            if(item.quantity === 1)
                state.cartItems = state.cartItems.filter((p) => p.id !== product.id);
            else
                item.quantity -= 1;

            state.totalItems -= 1;
            state.totalAmount -= item.price;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalItems = 0;
        }
    }
});

export const {addToCart, removeFromCart, increaseItem, decreaseItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;