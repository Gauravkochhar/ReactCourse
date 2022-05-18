import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartList: [] },
    reducers: {
        addCartItem(state, action) {
            const productId = action.payload.productId;
            const foundItem = state.cartList.find((elm) => elm.productId == productId);
            if(foundItem) {
                foundItem.productQuantity++;
                foundItem.productPrice = foundItem.productPrice * foundItem.productQuantity;
            } else {
                state.cartList.push({...action.payload, productQuantity: 1});
            }
        },
        removeCartItem(state, action) {

        }
    }
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;