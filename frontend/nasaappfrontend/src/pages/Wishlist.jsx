import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Apod from "./Apod";  // Adjust the import path based on your project structure
import Login from "./Login";  // Adjust the import path based on your project structure

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
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

  const handleOpenMenu = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const handleDeleteItem = async () => {
    try {
      if (selectedItem) {
        await axios.delete("http://localhost:9094/wishlist/delete", {
          data: {
            username: selectedItem.username,
            date: selectedItem.date,
            url: selectedItem.url,
          },
          headers: { Authorization: `${token}` },
        });
        fetchWishlistItems();
      }
      handleCloseMenu();
    } catch (error) {
      console.error("Error deleting item from the wishlist", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", padding: "0 20px" }}>
      {token ? (
        <>
          <h2 style={{ textAlign: "initial" }}>My Wishlist</h2>
          <Grid container spacing={3} mb={5} justifyContent="center">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.date}>
                  <Card>
                    <CardContent style={{ position: "relative" }}>
                      <img
                        src={item.url}
                        alt={item.title}
                        style={{ maxWidth: "300px", height: "300px", objectFit: "cover" }}
                      />
                      <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                        <IconButton
                          aria-label="more"
                          aria-controls="wishlist-menu"
                          aria-haspopup="true"
                          onClick={(e) => handleOpenMenu(e, item)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="wishlist-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleCloseMenu}
                        >
                          <MenuItem onClick={handleDeleteItem}>Delete</MenuItem>
                        </Menu>
                      </div>
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
        </>
      ) : (
        <Login />
      )}
        {/* Render Apod component */}
    </div>
  );
}

export default Wishlist;
