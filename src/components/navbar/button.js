import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default ({path, title}) => {
    const navigate = useNavigate();

    return (
        <Button
            color="inherit"
            onClick={() => navigate(path)}
        >
            {title}
        </Button>
    );
}
