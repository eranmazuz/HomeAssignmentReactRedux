import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Stack } from "@mui/material";
import CAPTIONS from "../Constants/captions";
import CategoriesComboBox from "./categoriesComboBox";
import ProductNameInput from "./productNameInput";
import ProductAmountInput from "./productAmountInput";
import {cartActions} from "../Store/cartSlice";
import ERRORS from "../Constants/errors";

const NewProductInput = () => {
    const [category, setCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [productAmount, setProductAmount] = useState(0)


    const dispatch = useDispatch();
    const handleProductSave = useCallback(() =>  {
        dispatch(cartActions.clearErrors())
        const errors = {}
        if(!category) {
            errors.category = ERRORS.REQUIRED
        }
        if(!productName.trim()) {
            errors.productName = ERRORS.REQUIRED
        }
        if(!productAmount) {
            errors.productAmount = ERRORS.REQUIRED
        }
        if(Object.keys(errors).length === 0) {
            dispatch(cartActions.addItem({
                category: category,
                name: productName,
                amount: productAmount
            }))
        } else {
            dispatch(cartActions.setErrors(errors))
        }

    }, [category, productName, productAmount, dispatch])



    return (
        <Stack spacing={2} padding={2} direction='row'>
            <CategoriesComboBox setCategory={setCategory}/>
            <ProductNameInput setProductName={setProductName}/>
            <ProductAmountInput setProductAmount={setProductAmount}/>
            <Button variant="contained" onClick={handleProductSave}>{CAPTIONS.SAVE}</Button>
        </Stack>
    )

}
export default NewProductInput;