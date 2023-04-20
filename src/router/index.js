import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../pages/home";
import ProductListPage from "../pages/product/list";
import ProductPage from "../pages/product";
import ProductEditPage from "../pages/product/edit";

const baseURL = "/";

export const routes = {
    home: baseURL,
    product: `${baseURL}products/:id`,
    product_list: `${baseURL}products`,
    product_edit: `${baseURL}products/:id/edit`,
};

const Router = () => (
    <Layout>
        <Routes>
            <Route exact path={routes.home} element={<HomePage />} />
            <Route exact path={routes.product_list} element={<ProductListPage />} />
            <Route exact path={routes.product} element={<ProductPage />} />
            <Route exact path={routes.product_edit} element={<ProductEditPage />} />
            <Route path="*" element={<h1>Page ot found</h1>} />
        </Routes>
    </Layout>
);

export default Router;
