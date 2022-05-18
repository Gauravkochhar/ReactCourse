import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Slice/counterSlice';
import { ProductStockReducer } from './Slice/productStockSlice';
import { RootReducer } from './Slice/root.reducer';
// const counterReducerFn = (state = {counter: 0}, action) => {
//     if(action.type == 'increment') {
//         return {
//         counter: state.counter + 1
//         }
//     }
//     if(action.type == 'increase') {
//         return {
//         counter: state.counter + action.payload
//         }
//     }
//     if(action.type == 'decrement') {
//         return {
//             counter: state.counter - 1
//         }
//     }
//     return state;
// };




// const store = configureStore({reducer: {
//     counterScreen: counterReducer,
//     productStock: ProductStockReducer
// }});

const store = configureStore({reducer: RootReducer});

export default store;