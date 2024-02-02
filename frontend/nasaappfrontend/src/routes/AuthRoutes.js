import React from "react";
import { Route } from "react-router-dom";
import Wishlist from "../pages/Wishlist";
import Apod from "../pages/Apod";
import AuthGuard from "../guards/AuthGuards";

const AuthRoutes = [

    <Route key="Wishlist" path="/wishlist" element={<AuthGuard component={<Wishlist />} />} />,
    <Route key="Apod" path="/apod" element={<AuthGuard component={<Apod />} />} />
]

export default AuthRoutes;