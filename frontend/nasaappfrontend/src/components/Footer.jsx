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
        <div className="footer-wrapper">
            <Box
                component="footer"
                className="footer-container"
                sx={{
                    backgroundColor: "#1a1818",
                    color: "grey",
                    padding: "1rem",
                    textAlign: "left",
                    bottom: 0,
                    position: "relative"
                }}
            >

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={5}
                >
                    <Box>
                        <img
                            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nasa_logo_icon_170926.png"
                            alt="Nasa App Icon"
                            style={{ width: "4em", height: "4em", marginRight: "2em", marginTop: "2em" }}
                        />
                    </Box>
                    <Box >
                        <Typography variant="h5" color="white">
                            NASA APP
                        </Typography>

                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ marginBottom: "1em", marginRight: "0.1em", fontWeight: "bold" }}>
                            Follow NASA
                        </Typography>
                        <Link to="https://www.facebook.com/NASA" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "1.5em", color: "white", marginRight: "0.5em" }} />
                        </Link>
                        <Link to="https://www.instagram.com/nasa/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1.5em", color: "white", marginRight: "0.5em" }} />
                        </Link>
                        <Link to="https://twitter.com/NASA" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "1.5em", color: "white", }} />
                        </Link>
                        <Link to="https://www.youtube.com/@NASA" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "1.5em", color: "white", marginLeft: "0.1em" }} />
                        </Link>

                    </Box>
                </Box>
                <Divider sx={{ backgroundColor: "gray", marginTop: "4vh", marginBottom: "50px" }} />
                <Typography sx={{ marginLeft: "50px", marginBottom: "30px" }}>
                    Page Last Updated: Feb 04, 2024 &emsp; &emsp; &emsp; Page Edited By: Ajita Ganguly
                </Typography>


            </Box>
        </div>
    );
};

export default Footer;