import React, {useCallback, useState} from "react";
import OrderList from "../Components/orderList";
import {Button, Stack, Typography} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import RequiredInput from "../Components/requiredInput";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../Store/cartSlice";
import ERRORS from "../Constants/errors";
import {ordersActions} from "../Store/ordersSlice";
import axios from "axios";

const OrderScreen = () => {
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const products = useSelector(state => state.cart.items)

    const dispatch = useDispatch();
    const handleFinishOrder = useCallback(async () =>  {
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
            const cart = []
            Object.entries(products).forEach(([category, items]) => {
                Object.entries(items).forEach(([name, amount]) => {
                    cart.push({
                        category,
                        name,
                        amount
                    })
                })
            })
            const orderData = { fullName, address, email, cart };
            console.log(orderData)
            await axios.post(process.env.REACT_APP_POST_ORDER_URL, orderData)
            alert('Order placed!');

        } else {
            dispatch(ordersActions.setErrors(errors))
        }

    }, [fullName, address, email, products, dispatch])
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