import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => {
        const response = await axios.get(process.env.REACT_APP_CATEGORIES_URL);
        return response.data;
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState: { categories: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            }).addCase(getCategories.rejected, (state) => {
                state.loading = false;
        })
    }
})

export const getCategoriesThunk = getCategories;
export const categoriesActions = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer