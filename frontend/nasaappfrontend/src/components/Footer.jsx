import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import "./Footer.css";

const Footer = () => {

    const location = useLocation();

    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";

    if (isLoginPage || isRegisterPage) {
        return null;
    }

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#1a1818",
                color: "grey",
                padding: "20px",
                textAlign: "left",

                bottom: 0,
            }}
        >

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt={2}
            >
                <img
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nasa_logo_icon_170926.png"
                    alt="BookMovies Icon"
                    style={{ width: "40px", height: "40px", marginRight: "8px", marginTop: "24px" }}
                />
                <Typography variant="h5" component="span" color="white" sx={{ mt: 4 }}>
                    NasaApp
                </Typography>

            </Box>
            <Typography>
                Page Edited By: Ajita Ganguly
            </Typography>
        </Box>
    );
};

export default Footer;