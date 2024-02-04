
import React from "react";
import { Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import UnAuthGuard from "../guards/UnAuthGuards";


const UnAuthRoutes = [
    <Route key="Home" path="/" element={<UnAuthGuard component={<Home />} />}></Route>,
    <Route key="Login" path="/login" element={<UnAuthGuard component={<Login />} />} ></Route>,
    <Route key="Register" path="/register" element={<UnAuthGuard component={<Register />} />} > </Route>,

]

export default UnAuthRoutes;