import React, { useEffect, useState } from 'react';
import DummyJsonClient from '../../services/api/apiClient';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {TextField, Box, Button, ImageListItem, ImageList} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InfoDialog from "../../components/dialog/info";

const validationSchema = yup.object({
    title: yup.string().required(),
    brand: yup.string().required(),
    rating: yup.number().positive().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^\d*\.{1}\d*$/),
    ),
    category: yup.string().required(),
    price: yup.number().positive().integer().required(),
    stock: yup.number().positive().integer(),
    description: yup.string(),
}).required();

const ProductEditPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null)
    const {id} = useParams();
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogText, setDialogText] = useState('');
    const [showDialog, setShowDialog] = useState(false);

    const onSubmit = data => {
        DummyJsonClient.products.update(id, data)
            .then(res => {
                setProduct(res.data)
                setDialogTitle('Success');
                setDialogText('The product successfully updated!');
                setShowDialog(true);
            })
            .catch(() => {
                setDialogTitle('Error');
                setDialogText('The product didn\'t updated!');
                setShowDialog(true);
            })
            .finally(() => setIsLoading(false));
    };

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
        <Box sx={{ pt: 10, textAlign: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField
                        error={errors.title?.message}
                        sx={{ m: 2, width: '25em' }}
                        label="Title"
                        defaultValue={product.title}
                        helperText={errors.title?.message}
                        {...register("title")}
                    />
                    <TextField
                        error={errors.brad?.message}
                        sx={{ m: 2, width: '25em' }}
                        label="Brand"
                        defaultValue={product.brand}
                        helperText={errors.brad?.message}
                        {...register("brand")}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.category?.message}
                        sx={{ m: 2, width: '25em' }}
                        label="Category"
                        defaultValue={product.category}
                        helperText={errors.category?.message}
                        {...register("category")}
                    />
                    <TextField
                        error={errors.rating?.message}
                        sx={{ m: 2, width: '25em' }}
                        label="Rating"
                        defaultValue={product.rating}
                        helperText={errors.rating?.message}
                        {...register("rating")}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.price?.message}
                        sx={{ m: 2, width: '25em' }}
                        label="Price"
                        defaultValue={product.price}
                        helperText={errors.price?.message}
                        {...register("price")}
                    />
                    <TextField
                        error={errors.stock?.message}
                        sx={{ m: 2, width: '25em' }}
                        label="Stock"
                        defaultValue={product.stock}
                        helperText={errors.stock?.message}
                        {...register("stock")}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.description?.message}
                        sx={{ m: 2, width: '52em' }}
                        label="Description"
                        defaultValue={product.description}
                        helperText={errors.description?.message}
                        {...register("description")}
                    />
                </div>
                <Button variant="contained" type="submit" sx={{ width: '20em'}}>Submit</Button>
            </form>
            <ImageList cols={3} gap={30} sx={{ mt: 10}}>
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
            <InfoDialog
                title={dialogTitle}
                text={dialogText}
                open={showDialog}
                setOpen={setShowDialog}
            />
        </Box>
    )
}

export default ProductEditPage;
