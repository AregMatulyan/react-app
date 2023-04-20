import React from 'react';
import { routes } from "../../router";
import { AppBar, Toolbar, Typography, Stack, Container } from '@mui/material';
import NavButton from './button';

const Navbar = () => (
    <AppBar>
        <Container maxWidth="xl" disableGutters>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    DummyJSON App
                </Typography>
                <Stack direction="row" spacing={2}>
                    <NavButton path={routes.home} title="Home" />
                    <NavButton path={routes.product_list} title="Products" />
                </Stack>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Navbar;
