import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Autocomplete, MenuItem, Menu, Popover } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/authSlice";

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const loggedIn = useSelector((state) => state.loggedIn);
    const dispatch = useDispatch();

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const toggleNav = (event) => {
        setNavOpen(event.currentTarget);
    };

    const closeNav = () => {
        setNavOpen(null);
    };

    const handleSignOut = () => {

        dispatch(actions.logout());
        setMenuItems([
            { label: "Sign In", path: "/login" },
            { label: "Sign Up", path: "/register" },
        ]);

        navigate("/");
        console.log("signed out");
        console.log(loggedIn);


    };

    const handleExplore = () => {
        dispatch(actions.login());
        navigate("/apod");
        console.log(loggedIn);
    };

    const handleLogin = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register");
    }

    useEffect(() => {
        const getMenuItems = () => {
            if (loggedIn) {
                console.log("loggin state:", loggedIn);
                return [
                    { label: "Explore", path: "/apod", onClick: handleExplore, },
                    { label: "Wishlist", path: "/wishlist" },
                    {
                        label: "Sign Out", onClick: handleSignOut,
                    },
                ];

            } else {
                console.log("loggedIn state:", loggedIn);
                return [
                    { label: "Sign In", path: "/login", onClick: handleLogin},
                    { label: "Sign Up", path: "/register", onClick: handleRegister },
                ];
            }
        };
        const updatedMenuItems = getMenuItems();
        setMenuItems(updatedMenuItems);


    }, [loggedIn, dispatch, navigate]);

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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                        }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleNav}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <Typography variant="h6" component="div">
                                NasaApp
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, }}>
                        <img
                            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nasa_logo_icon_170926.png"
                            alt="NasaApp Icon"
                            style={{ width: "10vh", height: "10vh" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {searchOpen ? (
                            <Autocomplete
                                options={[]}
                                freeSolo
                                open={searchOpen}
                                onOpen={toggleSearch}
                                onClose={toggleSearch}
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
                        ) : (
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-label="search"
                                onClick={toggleSearch}
                            >
                                <SearchIcon />
                            </IconButton>
                        )}
                    </Box>
                    {menuItems.length > 0 && (
                        <Menu
                            anchorEl={navOpen}
                            open={Boolean(navOpen)}
                            onClose={closeNav}
                            onClick={closeNav}
                        >
                            {menuItems.map((menuItem, index) => (
                                <MenuItem
                                    key={index}
                                    component={Link}
                                    to={menuItem.path}
                                    onClick={menuItem.onClick || closeNav}
                                    sx={{
                                        width: "125px",
                                        bgcolor: "white",
                                        ":hover": { color: "#cb0d0d" },
                                    }}
                                >
                                    {menuItem.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
