import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Slice/counterSlice';
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




const store = configureStore({reducer: {
    counterScreen: counterReducer
}});

export default store;