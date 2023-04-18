import React from 'react';
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const {id} = useParams();

    return (
        <div>
            This is Product {id} Page
        </div>
    );
}

export default ProductPage;
