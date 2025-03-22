import {TextField} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import ERRORS from "../Constants/errors";
import React, {useCallback} from "react";

const ProductAmountInput = ( { productAmount, setProductAmount }) => {

    const handleProductAmountSet = useCallback((event) => {

        setProductAmount(parseInt(event.target.value))
    }, [setProductAmount])

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
            error={!productAmount}
            helperText= {!productAmount ? ERRORS.REQUIRED: null}
            type="number"
        />
    )
}

export default ProductAmountInput