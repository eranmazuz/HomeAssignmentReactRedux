import {createSlice} from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'orders',
    initialState: { errors: {} },
    reducers: {
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

export const ordersActions = orderSlice.actions
export const ordersReducer = orderSlice.reducer

