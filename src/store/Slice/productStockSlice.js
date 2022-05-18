import { createSlice } from "@reduxjs/toolkit";

const productStockSlice = createSlice({
    name: 'productStock',
    initialState: { products: [] },
    reducers: {
        addSingleProduct(state, action) {
            state.products.push(action.payload);
        },
        saveFetchedProductList(state, action) {
            state.products = action.payload;
        }
    }
});

export const productStockActions = productStockSlice.actions;

export const ProductStockReducer = productStockSlice.reducer;