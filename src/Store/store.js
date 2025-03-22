import {configureStore} from "@reduxjs/toolkit";
import {categoriesReducer} from "./categoriesSlice";
import {cartReducer} from "./cartSlice";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        cart: cartReducer
    }
});

export default store;