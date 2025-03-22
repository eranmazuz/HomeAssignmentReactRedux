import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Stack } from "@mui/material";
import CAPTIONS from "../Constants/captions";
import CategoriesComboBox from "./categoriesComboBox";
import ProductNameInput from "./productNameInput";
import ProductAmountInput from "./productAmountInput";
import {cartActions} from "../Store/cartSlice";

const NewProductInput = () => {
    const [category, setCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [productAmount, setProductAmount] = useState(0)


    const dispatch = useDispatch();
    const handleProductSave = useCallback(() =>  {

        dispatch(cartActions.addItem({
            category: category,
            name: productName,
            amount: productAmount
        }))
    }, [category, productName, productAmount,dispatch])



    return (
        <Stack spacing={2} padding={2} direction='row'>
            <CategoriesComboBox category={category} setCategory={setCategory}/>
            <ProductNameInput productName={productName} setProductName={setProductName}/>
            <ProductAmountInput productAmount={productAmount} setProductAmount={setProductAmount}/>
            <Button variant="contained" onClick={handleProductSave} disabled={!category || !productName || !productAmount}>{CAPTIONS.SAVE}</Button>
        </Stack>
    )

}
export default NewProductInput;