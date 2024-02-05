import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselImages } from "../components/CarouselImages";
import YouTube from "react-youtube";
import FeaturedNewsCard from "../components/FeaturedNewsCard";
import { ArrowOutward } from "@mui/icons-material";
import "./Home.css"; 

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
        <Box className="home-container">
            <Carousel
                className="carousel-wrapper"
                showThumbs={false}
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={true}
                showArrows={false}
            >
                {carouselImages.slice(0, 4).map((image, index) => (
                    <div key={image.id} className="carousel-slide">
                        <img
                            src={image.hdurl}
                            alt={image.title}
                            className="carousel-image"
                        />
                        <div className="carousel-heading">
                            <Typography variant="h2" >
                                {getCarouselHeading(index)}
                            </Typography>
                        </div>
                        <button className="learn-more-button">
                            Learn More
                        </button>
                    </div>
                ))}
            </Carousel>

            <Typography variant="h2" className="featured-news-heading" gutterBottom style={{ fontWeight: "bolder" }}>
                Featured News
            </Typography>

            <Grid container spacing={2} mt={5}>
                <FeaturedNewsCard
                    imageSrc="https://www.nasa.gov/wp-content/uploads/2024/01/cygnus-advisory-2024.jpg"
                    altText="NASA Sets Coverage for Northrop Grumman Cargo Space Station Mission"
                    cardText="NASA Sets Coverage for Northrop Grumman Cargo Space Station Mission"
                />
                <FeaturedNewsCard
                    imageSrc="https://apod.nasa.gov/apod/image/2308/PIA25969_Ingenuity.jpg"
                    altText="Landing on Mars: A Tricky Feat!"
                    cardText="Landing on Mars: A Tricky Feat!"
                />
                <FeaturedNewsCard
                    imageSrc="https://www.nasa.gov/wp-content/uploads/2024/01/ksc-20231204-ph-kls01-0027large.jpg"
                    altText="NASA Sets Coverage for Ocean, Atmosphere, Climate Mission"
                    cardText="NASA Sets Coverage for Ocean, Atmosphere, Climate Mission"
                />
            </Grid>

            <Box className="featured-video-container">
                <Typography variant="body1" gutterBottom className="featured-video-heading">
                    FEATURED VIDEO
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" gutterBottom className="featured-video-title">
                            What Color is the Ocean?
                        </Typography>
                        <Typography variant="body2" paragraph className="featured-video-description">
                            The color of our oceans, lakes, and rivers can tell us a lot about what’s going on just beneath the surface.
                            With the new hyperspectral capabilities of the Plankton, Aerosol, Cloud, and Ocean Ecosystem (PACE) mission, we’ll know more about the health of aquatic ecosystems and their impacts on human health and climate studies.
                        </Typography>
                        <Typography variant="body1">
                            <a href="https://pace.gsfc.nasa.gov/" target="_blank" rel="noopener" className="explore-mission-link">
                                Explore the Mission
                                <ArrowOutward className="arrow-outward-icon" />
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
