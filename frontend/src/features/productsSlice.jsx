import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import productService from "../services/productService.jsx";

const initialState = {
    products: [],
    loading: false,
    error: false,
    selectedProduct: null,
};


export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async (_, {rejectWithValue}) => {
    try {
        return await productService.getAllProducts();
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id, {rejectWithValue}) => {
    try {
        return await productService.getProductById(id);
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
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.selectedProduct = null;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.selectedProduct = action.payload;
                console.log(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                state.selectedProduct = null;
            });
    }
});

export default productsSlice.reducer;