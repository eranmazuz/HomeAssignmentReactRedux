import {Autocomplete, TextField} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import React, {useCallback, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesThunk} from "../Store/categoriesSlice";
import {cartActions} from "../Store/cartSlice";

const CategoriesComboBox = ({ setCategory}) => {

    const errors = useSelector(state => state.cart.errors)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoriesThunk());
    }, [dispatch]);

    const categories = useSelector((state) => state.categories.categories);
    const categoriesLoading = useSelector((state) => state.categories.loading);

    const handleCategorySelect = useCallback((event, newCategory) => {
        dispatch(cartActions.clearError('category'))
        setCategory(newCategory)
    }, [setCategory, dispatch])


    return (
        <Autocomplete
            options={categories}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} error={errors.category} helperText={errors.category} label={CAPTIONS.CATEGORIES}/>}
            onInputChange={handleCategorySelect}
            loading={categoriesLoading}
            getOptionLabel={(option) => option.name}
        />
    )
}

export default CategoriesComboBox