import { Button, Card, CardContent, Grid, IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FavoriteBorder } from "@mui/icons-material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from "react-router-dom";

function Apod() {
    const [apods, setApods] = useState([]);
    const [filterDate, setFilterDate] = useState("");
    const [explore, setExplore] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    const username = localStorage.getItem("username") || "defaultUsername";
    const token = JSON.parse(localStorage.getItem("successResponse"))?.token || "";


    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    useEffect(() => {
        if (explore) {
            fetchAllApods();
        }
        else {
            fetchApod();
        }
    }, [explore]);


    const theme = createTheme({
        palette: {
            primary: {
                main: "#cb0d0d",
            },
            background: {
                default: "#242424",
            },
        },
    });

    const handleExploreClicked = async () => {
        setExplore((prevExplore) => !prevExplore);
        if (!explore) {
            await fetchAllApods();
        }
    }

    const fetchAllApods = async () => {
        try {
            const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=zhjoGExY6FeyM8buMcsnGj2fazcyfBeOzeH4dLBZ&start_date=2024-01-01");
            const filteredApods = response.data.filter(apod => apod.media_type === "image");
            setApods(filteredApods);
            console.log("Filtered APODS: ", filteredApods);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching APODs", error);
        }
    };

    const fetchApod = async () => {
        try {
            const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=zhjoGExY6FeyM8buMcsnGj2fazcyfBeOzeH4dLBZ");
            setApods([response.data]);
            console.log(apods[0].title);
        }
        catch (error) {
            console.error("Error fetching in APOD", error);
        }
    }

    const handleFilterChange = (event) => {
        setFilterDate(event.target.value);
    };

    const handleFilterSubmit = async () => {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=zhjoGExY6FeyM8buMcsnGj2fazcyfBeOzeH4dLBZ&date=${filterDate}`);
            setApods([response.data]);
            console.log([response.data]);
        } catch (error) {
            console.error("Error fetching APOD by Date", error);
        }
    };

    const handleAddToWishlist = async (apod) => {
        try {

            const firstLine = apod.explanation.split('\n')[0];
            const truncatedExplanation = firstLine.substring(0, 150);

            const wishlistItems = {
                copyright: apod.copyright,
                date: apod.date,
                explanation: truncatedExplanation,
                hdurl: apod.hdurl,
                media_type: apod.media_type,
                service_version: apod.service_version,
                title: apod.title,
                url: apod.url,
                username,
            };

            await axios.post("http://localhost:9094/wishlist/add", wishlistItems,
                { headers: { Authorization: `${token}` } });
            console.log("Added to wishlist successfully: ", apod.title);
            handleSnackbarOpen();
        }
        catch (error) {
            console.error("Error adding to wishlist", error);
        }
    };

    const handleImageClick = (apod) => {
        navigate(`/details/${apod.date}`);
        console.log("Redirecting to details page: ", apod.date);
    };

    const handleFavoriteIconClick = (apod) => {
        handleAddToWishlist(apod);
        handleSnackbarOpen();
    }

    return (
        <ThemeProvider theme={theme}>
            <div style={{ textAlign: "center", marginTop: "110px", marginBottom: "100px", padding: "0 20px" }}>
                <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>Image of the Day</Typography>
                {explore ? (

                    <Grid container spacing={3} justifyContent="center">
                        <Grid container spacing={3} justifyContent="end">
                            <Grid item xs={12} sm={6} md={4} mt={8} mb={3}>
                                <TextField label="Filter By Date" type="date" value={filterDate}
                                    onChange={handleFilterChange} InputLabelProps={{ shrink: true }}
                                />
                                <Button variant="contained" sx={{ ml: 2, mt: 1, bgcolor: "primary.main" }} onClick={handleFilterSubmit}>
                                    Filter
                                </Button>
                            </Grid>
                        </Grid>
                        {apods.map((apod) => (
                            <Grid item xs={12} sm={6} md={4} key={apod.date}>

                                <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}>
                                    <CardContent style={{ position: "relative" }}>
                                        <img src={apod.url} alt={apod.title} style={{ maxWidth: "100%", height: "300px", objectFit: "cover" }} onClick={() => handleImageClick(apod)} />
                                        <div style={{ position: "absolute", bottom: "5px", right: "2px" }}>
                                            <IconButton style={{ color: "red" }} onClick={() => handleFavoriteIconClick(apod)}>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <Snackbar

                                                open={snackbarOpen}
                                                autoHideDuration={6000}
                                                onClose={handleSnackbarClose}

                                            >
                                                <Alert
                                                    onClose={handleSnackbarClose}
                                                    severity="success"
                                                    variant="filled"
                                                    sx={{ width: '100%' }}
                                                >
                                                    Successfully Added to the Wishlist
                                                </Alert>

                                            </Snackbar>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                                            <Typography variant="h7" component="div">
                                                {apod.title}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>


                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Grid container spacing={10} mt={0.1} justifyContent="center">
                       
                        {apods.length > 0 ? (
                            <>
                                <Grid item xs={12} md={6} mt={5} style={{ padding: "16px", maxWidth: "100%" , marginLeft: "70px"}}>
                                    <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}>
                                        <CardContent>
                                            <img src={apods[0].url} alt={apods[0].title} style={{ maxWidth: "100%", height: "400px", objectFit: "cover" }} />
                                            <Typography variant="h5" component="div" style={{ marginTop: "16px" }}>
                                                {apods[0].title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6} mt={2} style={{ maxWidth: "100%", marginBottom: "16px" }}>
                                    <Typography variant="body1" style={{ maxWidth: "100%" }}>
                                        {apods[0].explanation}
                                    </Typography>
                                    <Button variant="text" onClick={handleExploreClicked} style={{ marginTop: "15px" }}>
                                        <Typography variant="subtitle1" underline="always">
                                            Browse Image Archive
                                        </Typography>
                                    </Button>
                                </Grid>
                            </>
                        ) : (
                            <Typography variant="body1">No APOD available</Typography>
                        )}
                    </Grid>

                )}
            </div>
        </ThemeProvider>
    );
};

export default Apod;
