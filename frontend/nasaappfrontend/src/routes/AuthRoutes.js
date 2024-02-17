import React from "react";
import { Route } from "react-router-dom";
import Wishlist from "../pages/Wishlist";
import Apod from "../pages/Apod";
import AuthGuard from "../guards/AuthGuards";
import UnAuthGuard from "../guards/UnAuthGuards";
import Home from "../pages/Home";


const login = JSON.parse(localStorage.getItem("successResponse"))?.token || "";

const AuthRoutes = [


    <Route key="Home" path="/" element={<UnAuthGuard component={<Home />} />}></Route>,
    <Route key="Wishlist" path="/wishlist" element={<AuthGuard component={<Wishlist />} />} />,
    <Route key="Apod" path="/apod" element={<AuthGuard component={<Apod />} />} />
]

export default AuthRoutes;