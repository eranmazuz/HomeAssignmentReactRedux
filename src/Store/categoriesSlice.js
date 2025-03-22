import {createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {},
    extraReducers: {}
})

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice