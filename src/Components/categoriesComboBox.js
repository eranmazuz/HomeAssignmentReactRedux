import {Autocomplete, TextField} from "@mui/material";
import ERRORS from "../Constants/errors";
import CAPTIONS from "../Constants/captions";
import React, {useCallback, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesThunk} from "../Store/categoriesSlice";

const CategoriesComboBox = ({ category, setCategory}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoriesThunk());
    }, [dispatch]);

    const categories = useSelector((state) => state.categories.categories);
    const categoriesLoading = useSelector((state) => state.categories.loading);
    console.log(categories)

    const handleCategorySelect = useCallback((event, newCategory) => {
        setCategory(newCategory)
    }, [setCategory])


    return (
        <Autocomplete
            options={categories}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} error={!category} helperText= {!category ? ERRORS.REQUIRED: null} label={CAPTIONS.CATEGORIES}/>}
            onInputChange={handleCategorySelect}
            loading={categoriesLoading}
            getOptionLabel={(option) => option.name}
        />
    )
}

export default CategoriesComboBox