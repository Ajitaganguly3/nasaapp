import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

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
                justifyContent="space-between"
                mt={2}
            >
                <Box>
                    <img
                        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nasa_logo_icon_170926.png"
                        alt="Nasa App Icon"
                        style={{ width: "60px", height: "60px", marginRight: "8px", marginTop: "20px" }}
                    />
                </Box>
                <Box >
                    <Typography variant="h5" component="span" color="white" >
                        NASA APP
                    </Typography>

                </Box>
                <Box>
                    <Typography variant="h6" sx={{ marginBottom: "10px", marginRight: "60px", fontWeight: "bold" }}>
                        Follow NASA
                    </Typography>
                    <Link to="https://www.facebook.com/NASA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "25px", color: "white", marginRight: "20px" }} />
                    </Link>
                    <Link to="https://www.instagram.com/nasa/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "25px", color: "white", marginRight: "20px" }} />
                    </Link>
                    <Link to="https://twitter.com/NASA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "25px", color: "white", marginRight: "20px" }} />
                    </Link>
                    <Link to="https://www.youtube.com/@NASA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "25px", color: "white", marginRight: "20px" }} />
                    </Link>

                </Box>
            </Box>
            <Divider sx={{ backgroundColor: "gray", marginTop: "30px", marginBottom: "50px" }} />
            <Typography sx={{ marginLeft: "50px", marginBottom: "30px" }}>
                Page Last Updated: Feb 04, 2024 &emsp; &emsp; &emsp; Page Edited By: Ajita Ganguly
            </Typography>

        </Box>
    );
};

export default Footer;