import React from 'react';
import {useNavigate} from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { routes } from "../../router";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h3" sx={{pt: 10, pb: 5}}>
                Explore our products
            </Typography>
            <Button variant="outlined" size="large" onClick={() => navigate(routes.product_list)}>
                List Products
            </Button>
        </>
    );
};

export default HomePage;
