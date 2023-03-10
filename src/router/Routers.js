import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  ListProducts  from '../components/ListProduct/ListProducts';
import Cart from '../containers/public/Cart/CartComponent';
import CreateHome from '../components/CreateHome';
import DetailProduct from '../components/DetailsProductComponent/DetailProduct';
import { Home, HomePage } from '../containers/public';
import LoginPage from '../containers/public/LoginPage/LoginPage';
import AdminPage from '../containers/systems/AdminPage';
import { path } from '../untils/path';
import Checkout from '../containers/public/Checkout/Checkout';

const Routers = () => {
    return (
        <Routes>
            <Route path={path.HOME} element={<Home />} >
                <Route path={path.LISPRODUCT} element={<ListProducts />} />
                <Route path={path.HOME} element={<HomePage />} />
                <Route path={path.DETAILSPRODUCT} element={<DetailProduct />} />
                <Route path={path.CART} element={<Cart />} />
                <Route path={path.CHECKOUT} element={<Checkout />} />
            </Route>
            <Route path={path.LOGIN} element={<LoginPage />} />
            <Route path={path.ADMIN} element={<AdminPage />} />
            <Route path={'/createhome'} element={<CreateHome />} />
        </Routes>
    )
}

export default Routers
