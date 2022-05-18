import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { counterReducer } from "./counterSlice";
import { ProductStockReducer } from "./productStockSlice";

export const RootReducer = combineReducers({
    counterScreen: counterReducer,
    productStock: ProductStockReducer,
    cartStock: cartReducer
})

