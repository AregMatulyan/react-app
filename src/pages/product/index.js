import React, {useEffect, useState} from 'react';
import DummyJsonClient from '../../services/api/apiClient';
import { useParams } from "react-router-dom";
import {Box, ImageList, ImageListItem, Typography} from '@mui/material';
import ProductLabel from "../../components/product/label";

const ProductPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const getProduct = () => {
            DummyJsonClient.products.get(id)
                .then(res => setProduct(res.data))
                .finally(() => setIsLoading(false));
        }

        getProduct();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <h3>The product with a given "{id}" ID dost exists.</h3>;
    }

    return (
        <Box sx={{ pt: 10 }}>
            <Typography variant="h3">
                {product.title}
            </Typography>

            <Typography variant="body1" paragraph={true} align="justify" sx={{py: 3}}>
                {product.description}
            </Typography>

            <ProductLabel label="Brand" value={product.brand} />
            <ProductLabel label="Category" value={product.category} />
            <ProductLabel label="Price" value={product.price} />
            <ProductLabel label="In Stock" value={product.stock} />
            <ProductLabel label="Rating" value={product.rating} />

            <ImageList cols={3} gap={30}>
                {product.images.map(image => (
                    <ImageListItem key={image}>
                        <img
                            src={image}
                            alt=""
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default ProductPage;
