import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Apod from "./Apod";
import Login from "./Login";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
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
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get(`http://ec2-34-199-255-228.compute-1.amazonaws.com:9094/wishlist/all/${username}`, {
        headers: { Authorization: `${token}` },
      });

      const wishListAddedDate = response.data.map((item) => ({ ...item, addedDate: new Date(), }));
      setWishlistItems(wishListAddedDate);
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
        await axios.delete("http://ec2-34-199-255-228.compute-1.amazonaws.com:9094/wishlist/delete", {
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
      handleSnackbarOpen();
    } catch (error) {
      console.error("Error deleting item from the wishlist", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "8rem", padding: "0 0.5rem" }}>
      {token ? (
        <>
          <h2 style={{ textAlign: "initial", marginBottom: "4rem" }}>My Wishlist</h2>
          <Grid container spacing={3} mb={5} justifyContent="center">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.date}>
                  <Card style={{ boxShadow: "0 1rem 1.5rem rgba(0, 0, 0, 0.8)" }}>
                    <CardContent style={{ position: "relative", margin: "1rem" }}>
                      <img
                        src={item.url}
                        alt={item.title}
                        style={{ maxWidth: "100%", height: "20rem", objectFit: "cover", }}
                      />
                      <div style={{ zIndex: 1, position: "absolute", top: "0.1rem", right: "-1rem" }}>
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
                            Successfully Deleted from the Wishlist
                          </Alert>

                        </Snackbar>
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

    </div>
  );
}

export default Wishlist;
