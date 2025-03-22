import {configureStore} from "@reduxjs/toolkit";
import {categoriesReducer} from "./categoriesSlice";
import {cartReducer} from "./cartSlice";
import {ordersReducer} from "./ordersSlice";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        cart: cartReducer,
        orders: ordersReducer,
    }
});

export default store;