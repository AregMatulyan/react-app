import React from 'react';
import {Typography} from "@mui/material";

const ProductLabel = ({label, value}) => (
    <Typography variant="subtitle1" fontWeight="bold" sx={{mb: 2}}>
        {label}
        <Typography variant="body1">
            {value}
        </Typography>
    </Typography>
);

export default ProductLabel;
