import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import axios from "axios";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Menu, TextField, Autocomplete } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";


export default function NavBar() {
    const [navOpen, setNavOpen] = useState(null);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                style={{
                    backgroundColor: "#353333",
                    color: "white",
                    boxShadow: "0px 0px 0px 0px",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}

                        >
                            <MenuIcon />
                        </IconButton>
                        <Link
                            to="/home"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                NasaApp
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            position: "inherit",
                        }}
                    >
                        <Autocomplete
                            options={[]}
                            freeSolo

                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    type="text"
                                    variant="outlined"
                                    placeholder="Search..."
                                    size="small"
                                    sx={{
                                        width: "50vh",
                                        borderRadius: "20vh",
                                        bgcolor: "white",
                                        "& .MuiOutlinedInput-root": {
                                            "&:hover fieldset": {
                                                borderColor: "red",
                                            },
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "red",
                                        },
                                    }}
                                />
                            )}

                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                pointerEvents: "none",
                                borderRadius: "20vh",
                                border: "1vh solid transparent",
                                transition: "border-color 0.2s",
                            }}
                        />
                    </Box>

                    <>
                        <Button
                            component={Link}
                            to="/register"
                            color="inherit"
                            sx={{
                                color: "white",
                                marginRight: "10vh",
                                bgcolor: "#cb0d0d",
                                ":hover": { color: "#cb0d0d" },
                            }}
                        >
                            Register
                        </Button>
                    </>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
