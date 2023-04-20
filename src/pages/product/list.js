import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { routes } from "../../router";
import DummyJsonClient from '../../services/api/apiClient';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';

const ProductListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const cells = process.env.REACT_APP_PRODUCT_LIST_CELLS.split(',');
    const pageSize = parseInt(process.env.REACT_APP_LIMIT_PRODUCT_PER_PAGE);
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: pageSize,
    });

    const listProducts = (page) => {
        const skip = page * pageSize
        DummyJsonClient.products.list(skip)
            .then(res => {
                setProducts(res.data.products);
                setPaginationModel(prev => ({
                    ...prev,
                    page
                }))
                setTotal(res.data.total)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        listProducts(0);
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 100}
    ];

    cells.map(cell => columns.push({
        field: cell,
        headerName: cell.toUpperCase(),
        width: 300
    }));

    return (
        <Box sx={{ pt: 5 }}>
            <Typography variant="h3" sx={{ mb: 5 }}>Products</Typography>
                <DataGrid
                    autoHeight
                    rows={products}
                    columns={columns}
                    rowCount={total}
                    loading={isLoading}
                    pageSizeOptions={[10]}
                    paginationModel={paginationModel}
                    paginationMode="server"
                    onRowClick={(row) => navigate(routes.product.replace(':id', row.id))}
                    onPaginationModelChange={(e) => listProducts(e.page)}
                />
        </Box>
    );
};

export default ProductListPage;
