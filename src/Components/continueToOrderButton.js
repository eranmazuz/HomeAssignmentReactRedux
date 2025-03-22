import React, {useCallback } from "react";
import {Button} from "@mui/material";
import CAPTIONS from "../Constants/captions";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../Store/cartSlice";

const ContinueToOrderButton = () => {
    const products = useSelector(state => state.cart.items)
    const dispatch = useDispatch();
    const handleGoToOrder = useCallback(() => {
        dispatch(cartActions.finishOrder())
    }, [dispatch])

    return (
        <Button variant="contained" onClick={handleGoToOrder} disabled={!Object.keys(products).length}>{CAPTIONS.CONTINUE_TO_ORDER}</Button>
    )
}

export default ContinueToOrderButton;