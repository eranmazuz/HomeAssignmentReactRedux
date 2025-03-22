import {TextField} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../Store/cartSlice";

const ProductNameInput = ({ setProductName }) => {
    const errors = useSelector(state => state.cart.errors)
    const dispatch = useDispatch();

    const handleProductNameSet = useCallback((event) => {
        dispatch(cartActions.clearError('productName'))
        setProductName(event.target.value)
    }, [setProductName, dispatch])
    return (
        <TextField
            label={CAPTIONS.PRODUCT_NAME}
            variant='outlined'
            sx={{ width: 300 }}
            onChange={handleProductNameSet}
            error={errors.productName}
            helperText= {errors.productName}
        />
    )
}

export default ProductNameInput;