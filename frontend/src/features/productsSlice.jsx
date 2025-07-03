import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import productService from "../services/ProductService.jsx";

const initialState = {
    products: [],
    loading: false,
    error: false,
    selectedProducts: null,
};


export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async (_, { rejectWithValue }) => {
    try{
        return await productService.getAllProducts();
    } catch (error) {
        return rejectWithValue(error);
    }
});


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

export default productsSlice.reducer;