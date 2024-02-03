import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselImages } from "../components/CarouselImages";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import ".//Home.css";
import YouTube from "react-youtube";
import { ArrowForward, ArrowOutward } from "@mui/icons-material";

const Home = () => {

    const getCarouselHeading = (index) => {
        switch (index) {
            case 0:
                return "Delivering\nScience\nTo the\nMoon";
            case 1:
                return "The\nWhirlpool\nGalaxy from\nHubble";
            case 2:
                return "Apollo 11:\nCatching\nSome\nSun";
            case 3:
                return "Phoenix\nNebula:\nA Rare\nSight";
            default:
                return "";
        }
    };

    return (
        <Box sx={{ p: 2, mt: 8, mb: 8 }}>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={true}
                showArrows={false}
                style={{ width: "100%" }}
            >
                {carouselImages
                    .slice(0, 4).map((image, index) => (
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
                            <div style={{ position: "absolute", top: "20%", left: "20px", color: "white", textAlign: "left" }}>
                                <Typography variant="h2" color="inherit" gutterBottom style={{ fontWeight: "bolder", whiteSpace: "pre-line" }}>
                                    {getCarouselHeading(index)}
                                </Typography>

                            </div>

                            <button
                                style={{
                                    position: "absolute",
                                    bottom: "40px",
                                    left: "20px",
                                    padding: "8px 16px",
                                    backgroundColor: "#cb0d0d",
                                    borderRadius: "4px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
            </Carousel>
            <Typography variant="h2" gutterBottom mt={10} style={{ fontWeight: "bolder" }}>
                Featured News
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 650, height: "100%", position: "relative" }}>
                        <CardMedia
                            component="img"
                            height="350"
                            src="https://www.nasa.gov/wp-content/uploads/2024/01/cygnus-advisory-2024.jpg"
                            alt="Featured News"

                        >

                        </CardMedia>
                        <CardContent>

                            <Typography variant="body1" color="text.secondary">
                                NASA Sets Coverage for Northrop  Grumman Cargo Space Station Mission
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 650, height: "100%" }}>
                        <CardMedia
                            component="img"
                            height="350"
                            src="https://apod.nasa.gov/apod/image/2308/PIA25969_Ingenuity.jpg"
                            alt="Featured Article"
                        />
                        <CardContent>

                            <Typography variant="body1" color="text.secondary">
                                Landing on Mars: A Tricky Feat!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 650, height: "100%" }}>
                        <CardMedia
                            component="img"
                            height="350"
                            src="https://www.nasa.gov/wp-content/uploads/2024/01/ksc-20231204-ph-kls01-0027large.jpg"
                            alt="Featured Article"
                        />
                        <CardContent>

                            <Typography variant="body1" color="text.secondary">
                                NASA Sets Coverage for Ocean, Atmosphere, Climate Mission
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ backgroundColor: "#242424", mt: 8, p: 4, color: "white" }}>
                <Typography variant="body1" gutterBottom sx={{ color: "gray" }}>
                    FEATURED VIDEO
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" gutterBottom sx={{ mt: 8 }} style={{fontWeight: "bold"}}>
                            What Color is the Ocean?
                        </Typography>
                        <Typography variant="body2" paragraph style={{color: "#efeeeb"}}>
                            The color of our oceans, lakes, and rivers can tell us a lot about what’s going on just beneath the surface.
                            With the new hyperspectral capabilities of the Plankton, Aerosol, Cloud, and Ocean Ecosystem (PACE) mission, we’ll know more about the health of aquatic ecosystems and their impacts on human health and climate studies.

                        </Typography>
                        <Typography variant="body1">
                            <a href="https://pace.gsfc.nasa.gov/" target="_blank" rel="noopener" style={{ color: "white", textDecoration: "none", display: "inline-block", fontWeight: "bold" }}>
                                Explore the Mission
                                <ArrowOutward sx={{ fontSize: 16, verticalAlign: "middle", marginLeft: 1, color: "#cb0d0d", transition: "color 0.3s", }} />
                            </a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <YouTube
                            videoId="VwVL0UBVVLA"
                            opts={{ width: "100%", height: "500" }}
                        />

                    </Grid>
                </Grid>

            </Box>

        </Box>

    );
};

export default Home;