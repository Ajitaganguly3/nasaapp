
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";

function Details() {
    const { date } = useParams();
    const [apodDetails, setApodDetails] = useState(null);

    useEffect(() => {
        const fetchApodDetails = async () => {
            try {
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=zhjoGExY6FeyM8buMcsnGj2fazcyfBeOzeH4dLBZ&date=${date}`);
                setApodDetails(response.data);
            } catch (error) {
                console.error("Error fetching APOD details", error);
            }
        };

        fetchApodDetails();
    }, [date]);

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {apodDetails ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px" }}>
                    <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", marginTop: "18vh", textAlign: "center" }}>{apodDetails.title}</Typography>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#484848", marginTop: "20px" }}>
                        <img src={apodDetails.url} alt={apodDetails.title} style={{ maxWidth: "80%", borderRadius: "2rem", height: "auto", objectFit: "cover", marginTop: "1rem", boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.8)" }} />

                        <Typography variant="body1" style={{ marginTop: "3rem", marginBottom: "2rem", marginRight: "1rem", marginLeft: "1rem", textAlign: "center", color: "white" }}>{apodDetails.explanation}</Typography>
                        {/* <Typography variant="body2" style={{ marginTop: "3rem", marginBottom: "2rem", marginRight: "1rem", marginLeft: "1rem", textAlign: "center", color: "wheat" }}>Image Credit & Copyright: {apodDetails.copyright}</Typography> */}


                    </div>
                </div>
            ) : (
                <Typography variant="body1">Loading APOD details...</Typography>
            )}
        </div>
    );
}

export default Details;
