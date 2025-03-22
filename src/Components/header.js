import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';


const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div'>
                    Shopping App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;