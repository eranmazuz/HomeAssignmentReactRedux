import {List, ListItemText, ListSubheader, Stack} from "@mui/material";
import {useSelector} from "react-redux";
import React from "react";

const CartProductsList = () => {
    const products = useSelector(state => state.cart.items)
    return(
        <Stack direction='row' spacing={2} padding={2} flexWrap='wrap'>
            {
                Object.entries(products).map(([category, categoryProducts]) => (
                    <List key={category}>
                        <ListSubheader sx={{ textAlign: 'center',  borderColor: 'primary.main', bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2, fontWeight: 'medium' }}>{category}</ListSubheader>
                        {
                           Object.entries(categoryProducts).map(([productName, productAmount]) => (
                               <ListItemText key={productName} primary={`${productName} - ${productAmount}`}/>
                           ))
                        }
                    </List>
                ))
            }
        </Stack>
    )
}

export default CartProductsList