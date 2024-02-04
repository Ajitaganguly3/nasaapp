import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./FeaturedNewsCard.css"; // Import the CSS file

const FeaturedNewsCard = ({ imageSrc, altText, cardText }) => (
    <Grid item xs={12} sm={6} md={4}>
        <Card className="card-wrapper">
            <CardMedia
                component="img"
                height="350"
                src={imageSrc}
                alt={altText}
                className="card-media"
            />
            <CardContent className="card-content">
                <Typography variant="h5" style={{ color: "white", paddingLeft: "8px", paddingRight: "8px" }}>{cardText}</Typography>
            </CardContent>
        </Card>
    </Grid>
);

export default FeaturedNewsCard;
