import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Apod() {
    const [apods, setApods] = useState([]);
    const [filterData, setFilterData] = useState("");

    useEffect(() => {
        fetchApods();
    }, []);

    const fetchApods = async () => {
        try {
            const response = await axios.get("http://localhost:9093/apod/getApods");
            setApods(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching APODs", error);
        }
    };

    const handleFilterChange = (event) => {
        setFilterData(event.target.value);
    };

    const handleFilterSubmit = async () => {
        try {
            const response = await axios.get(`http://localhost:9093/apod/apodByDate/${filterData}`);
            setApods([response.data]);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching APOD by Date", error);
        }
    };

    return (
        <div>
            <TextField label="filter by Date" type="date" InputLabelProps={{ shrink: true, }} value={filterData} onChange={handleFilterChange} />
            <Button variant="contained" color="primary" onClick={handleFilterSubmit}>
                Filter
            </Button>
            <Grid container spacing={3}>
                {apods.map((apod) => (
                    <Grid item xs={12} sm={6} md={4} key={apod.date}>
                        <Card>
                            <CardContent>
                                <img src={apod.url} alt={apod.title} style={{ maxWidth: "100%" }} />
                                <Typography variant="h6" component="div">
                                    {apod.title}
                                </Typography>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}

            </Grid>
        </div>
    );
}

export default Apod;