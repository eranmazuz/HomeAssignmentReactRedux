import NewProductInput from "../Components/newProductInput";
import {Stack} from "@mui/material";
import CartProductsList from "../Components/cartProductsList";
import ContinueToOrderButton from "../Components/continueToOrderButton";
import React from "react";

const CartScreen = () => {
    return (
        <Stack>
            <NewProductInput/>
            <CartProductsList/>
            <ContinueToOrderButton/>
        </Stack>
)
}

export default CartScreen