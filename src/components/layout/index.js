import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from "../navbar";

const Layout = ({ children }) => (
    <Box sx={{ display: "flex" }}>
        <Navbar />
        <Container maxWidth="xl" sx={{mt: 10}}>
            {children}
        </Container>
    </Box>
);

export default Layout;
