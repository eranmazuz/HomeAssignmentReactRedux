import React, {useCallback, useState} from "react";
import OrderList from "../Components/orderList";
import {Button, Stack, Typography} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import RequiredInput from "../Components/requiredInput";
import {useDispatch} from "react-redux";
import {cartActions} from "../Store/cartSlice";
import ERRORS from "../Constants/errors";
import {ordersActions} from "../Store/ordersSlice";

const OrderScreen = () => {
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();
    const handleFinishOrder = useCallback(() =>  {
        dispatch(cartActions.clearErrors())
        const errors = {}
        if(!fullName.trim()) {
            errors.fullName = ERRORS.REQUIRED
        }
        if(!address.trim()) {
            errors.address = ERRORS.REQUIRED
        }
        if(!email.trim()) {
            errors.email = ERRORS.REQUIRED
        }
        if(Object.keys(errors).length === 0) {

        } else {
            dispatch(ordersActions.setErrors(errors))
        }

    }, [fullName, address, email, dispatch])
    return (
        <Stack spacing={2} padding={2}>
            <Typography variant="h4">{CAPTIONS.ORDER_SUMMERY}</Typography>
            <RequiredInput field='fullName' label={CAPTIONS.FULL_NAME} setValue={setFullName}/>
            <RequiredInput field='address' label={CAPTIONS.ADDRESS} setValue={setAddress}/>
            <RequiredInput field='email' label={CAPTIONS.EMAIL} setValue={setEmail}/>
            <OrderList/>
            <Button variant="contained" onClick={handleFinishOrder}>{CAPTIONS.FINISH_ORDER}</Button>

        </Stack>
    )
}

export default OrderScreen