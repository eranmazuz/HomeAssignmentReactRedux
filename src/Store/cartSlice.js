import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: {}, finishOrder: false, errors: {} },
    reducers: {
        addItem(state, action) {
            const newProduct = action.payload
            if (!(state.items[newProduct.category])){
                state.items[newProduct.category] = {}
            }

            if (!(state.items[newProduct.category][newProduct.name])){
                state.items[newProduct.category][newProduct.name] = 0
            }
            state.items[newProduct.category][newProduct.name] += newProduct.amount
        },
        finishOrder(state) {
            state.finishOrder = true
        },
        setErrors(state, action) {
            state.errors = action.payload
        },
        clearErrors(state) {
            state.errors = {}
        },
        clearError(state, action) {
            delete state.errors[action.payload]
        }
    }
});

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

