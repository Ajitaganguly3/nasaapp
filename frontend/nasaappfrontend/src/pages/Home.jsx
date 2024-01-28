import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselImages } from "../components/CarouselImages";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import ".//Home.css";

const Home = () => {

    return (
        <Box sx={{ p: 2, mt: 8, mb: 8 }}>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={true}
                showArrows={true}
                style={{ width: "100%" }}
            >
                {carouselImages
                    .slice(0, 4).map((image) => (
                        <div key={image.id} style={{ position: "relative" }}>

                            <img
                                src={image.hdurl}
                                alt={image.title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: "500px",
                                    objectFit: "cover",
                                    borderRadius: "4px",

                                }}

                            />

                            <button
                                style={{
                                    position: "absolute",
                                    bottom: "10px",
                                    right: "10px",
                                    transform: "translateX(-50%)",
                                    padding: "8px 16px",
                                    backgroundColor: "#cb0d0d",
                                    borderRadius: "4px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                View
                            </button>
                        </div>
                    ))}
            </Carousel>
            <Typography variant="h2" gutterBottom mt={8}>
                Featured News
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 550, position: "relative" }}>
                        <CardMedia
                            component="img"
                            height="350"
                            src="https://www.nasa.gov/wp-content/uploads/2024/01/cygnus-advisory-2024.jpg"
                            alt="Featured News"

                        >

                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" gutterBottom className="card-title">
                                NEWS RELEASE
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                NASA Sets Coverage for Northrop  Grumman Cargo Space Station Mission
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            height="350"
                            src="https://apod.nasa.gov/apod/image/2308/PIA25969_Ingenuity.jpg"
                            alt="Featured Article"
                        />
                        <CardContent>
                            <Typography variant="h4" gutterBottom className="card-title">
                                Article
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Landing on Mars: A Tricky Feat!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            src="https://apod.nasa.gov/apod/image/2202/bluemarble_apollo17_3000.jpg"
                            alt="Featured Article"
                        />
                        <CardContent>
                            <Typography variant="h4" gutterBottom className="card-title">
                                Article
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                2023 NASA International Space Apps Challenge Announces 10 Global Winners
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Box>

    );
};

export default Home;