import React from "react";
import {useSelector} from "react-redux";
import {List, ListItemText, ListSubheader} from "@mui/material";

const OrderList = () => {
    const products = useSelector(state => state.cart.items)

    return (
        <List>
            {
                Object.entries(products).map(([category, categoryProducts]) => (
                    <>
                        <ListSubheader key={category}> {`${category}:`}</ListSubheader>
                        {
                            Object.entries(categoryProducts).map(([productName, productAmount]) => (
                                <ListItemText inset key={`${productName} - ${productAmount}`} primary={`${productName} - ${productAmount}`}/>
                            ))
                        }
                    </>
                ))
            }
        </List>
    )
}

export default OrderList