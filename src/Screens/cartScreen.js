import NewProductInput from "../Components/newProductInput";
import {Stack} from "@mui/material";
import CartProductsList from "../Components/cartProductsList";

const CartScreen = () => {
    return (
        <Stack>
            <NewProductInput/>
            <CartProductsList/>
        </Stack>
)
}

export default CartScreen