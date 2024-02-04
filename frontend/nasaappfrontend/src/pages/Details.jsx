
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
        <div>
            {apodDetails ? (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", marginBottom: "70px" }}>
                    <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", marginTop: "100px" }}>{apodDetails.title}</Typography>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", width: "90%", padding: "20px", borderRadius: "8px", background: "#f0f0f0", marginTop: "20px" }}>
                        <img src={apodDetails.url} alt={apodDetails.title} style={{ maxWidth: "50%", height: "auto", objectFit: "cover", marginRight: "20px", marginLeft: "20px" }} />
                        <div style={{ maxWidth: "50%", textAlign: "left" }}>
                            <Typography variant="body1" style={{ marginBottom: "16px", marginRight: "20px", marginLeft: "30px", marginTop: "40px" }}>{apodDetails.explanation}</Typography>

                        </div>
                    </div>
                </div>
            ) : (
                <Typography variant="body1">Loading APOD details...</Typography>
            )}
        </div>
    );
}

export default Details;
