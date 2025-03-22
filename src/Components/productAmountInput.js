import {TextField} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../Store/cartSlice";

const ProductAmountInput = ( { setProductAmount }) => {
    const errors = useSelector(state => state.cart.errors)
    const dispatch = useDispatch();

    const handleProductAmountSet = useCallback((event) => {
        dispatch(cartActions.clearError('productAmount'))
        setProductAmount(parseInt(event.target.value))
    }, [setProductAmount,dispatch])

    const handleNumberValidation = useCallback((event) => {
        if((event.key === '-') || (event.key === '.') || (event.key === 'e')) {
            event.preventDefault();
        }
    },[])
    return (
        <TextField
            label={CAPTIONS.PRODUCT_AMOUNT}
            variant='outlined'
            sx={{ width: 300 }}
            onChange={handleProductAmountSet}
            onKeyDown={handleNumberValidation}
            error={errors.productAmount}
            helperText= {errors.productAmount}
            type="number"
        />
    )
}

export default ProductAmountInput