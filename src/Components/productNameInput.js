import {TextField} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import ERRORS from "../Constants/errors";
import React, {useCallback} from "react";

const ProductNameInput = ({ productName, setProductName }) => {
    const handleProductNameSet = useCallback((event) => {
        setProductName(event.target.value)
    }, [setProductName])
    return (
        <TextField
            label={CAPTIONS.PRODUCT_NAME}
            variant='outlined'
            sx={{ width: 300 }}
            onChange={handleProductNameSet}
            error={!productName}
            helperText= {!productName ? ERRORS.REQUIRED: null}
        />
    )
}

export default ProductNameInput;