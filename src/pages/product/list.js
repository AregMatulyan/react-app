import React, {useEffect, useState} from 'react';
import DummyJsonClient from '../../services/api/apiClient';

const ProductListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const listProducts = () => {
            DummyJsonClient.products.list()
                .then(res => setProducts(res.data))
                .finally(() => setIsLoading(false));
        }

        listProducts();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!products) {
        return <h3>No products found.</h3>;
    }

    return (
        <h1>
            Products List page
        </h1>
    );
}

export default ProductListPage;
