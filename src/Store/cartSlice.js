import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: {} },
    reducers: {
        addItem(state, action) {
            const newProduct = action.payload
            console.log(action.payload)
            if (!(state.items[newProduct.category])){
                state.items[newProduct.category] = {}
            }

            if (!(state.items[newProduct.category][newProduct.name])){
                state.items[newProduct.category][newProduct.name] = 0
            }
            state.items[newProduct.category][newProduct.name] += newProduct.amount
        }
    }
});

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

