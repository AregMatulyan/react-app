import React, {useEffect, useState, useMemo} from 'react';
import { useNavigate } from "react-router-dom";
import { routes } from "../../router";
import DummyJsonClient from '../../services/api/apiClient';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box, TextField } from '@mui/material';
import debounce from 'lodash.debounce';

const ProductListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
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
        DummyJsonClient.products.list(search, skip)
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

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const debouncedSearch = useMemo(() => {
        return debounce(handleSearch, 300);
    }, []);

    useEffect(() => {
        listProducts(0);

        return () => {
            debouncedSearch.cancel();
        };
    }, [search]);

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
            <Typography variant="h3" sx={{ mb: 5 }}>
                Products
            </Typography>
            <TextField
                fullWidth
                label="Search"
                id="search"
                onChange={debouncedSearch}
                sx={{ mb: 3, mt: 1 }}
            />

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
