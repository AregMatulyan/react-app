import React, {useEffect, useState} from 'react';
import DummyJsonClient from '../../services/api/apiClient';
import { useParams } from "react-router-dom";

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
        <div>
            <h2>{product.title}</h2>
            <div><b>Brand:</b> {product.brand}</div>
            <div><b>Category:</b> {product.category}</div>
            <div><b>Description:</b> {product.description}</div>
            {product.images.map(image => (
                <React.Fragment key={image}>
                    <img src={image} alt=""/>
                </React.Fragment>
            ))}
        </div>
    )
}

export default ProductPage;
