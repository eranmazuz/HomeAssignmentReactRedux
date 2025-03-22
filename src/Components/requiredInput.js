import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ordersActions} from "../Store/ordersSlice";
import {TextField} from "@mui/material";

const RequiredInput = ({ setValue, field, label }) => {
    const errors = useSelector(state => state.orders.errors)
    const dispatch = useDispatch();

    const handleFieldSet = useCallback((event) => {
        dispatch(ordersActions.clearError(field))
        setValue(event.target.value)
    }, [setValue, dispatch, field])
    return (
        <TextField
            label={label}
            variant='outlined'
            sx={{ width: 300 }}
            onChange={handleFieldSet}
            error={errors[field]}
            helperText= {errors[field]}
        />
    )
}

export default RequiredInput;