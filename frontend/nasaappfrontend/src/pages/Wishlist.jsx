import { Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const username = localStorage.getItem("username") || "defaultUsername";
    const token = JSON.parse(localStorage.getItem("successResponse"))?.token || "";
  
    useEffect(() => {
      fetchWishlistItems();
    }, []);
  
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get(`http://localhost:9094/wishlist/all/${username}`, {
          headers: { Authorization: `${token}` },
        });
        setWishlistItems(response.data);
      } catch (error) {
        console.error("Error fetching wishlist items", error);
      }
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "100px", padding: "0 20px"}}>
        <h2 style={{textAlign:"initial"}}>My Wishlist</h2>
        <Grid container spacing={3} mb={5} justifyContent="center">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.date}>
                <Card>
                  <CardContent style={{ position: "relative" }}>
                    <img
                      src={item.url}
                      alt={item.title}
                      style={{ maxWidth: "100%", height: "300px", objectFit: "cover" }}
                    />
                    <div style={{ justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                      <Typography variant="h7" component="div">
                        {item.title}
                      </Typography>
                    </div>
                    <Typography variant="subtitle2" mt={1} color="textSecondary">
                      Added on {item.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1">No items in the wishlist</Typography>
          )}
        </Grid>
      </div>
    );
  }
  
  export default Wishlist;
  