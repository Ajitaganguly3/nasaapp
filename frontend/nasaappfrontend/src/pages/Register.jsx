import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

function CustomizedTextField(props) {
    return (
        <TextField
            {...props}
            sx={{
                "& .MuiInputBase-root": {
                    color: "#ffffff",
                },
                "& .MuiInputLabel-root": {
                    color: "#ffffff",
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#cb0d0d",
                    },
                    "&:hover fieldset": {
                        borderColor: "#ffffff",
                    },
                },
                "& .MuiInputLabel-shrink": {
                    color: "#cb0d0d",
                },
            }}
        />
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#cb0d0d",
        },
        background: {
            default: "#242424",
        },
    },
});

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const validateForm = () => {
        const newErrors = {
            firstName: firstName === "" ? "First Name is required" : "",
            lastName: lastName === "" ? "Last Name is required" : "",
            username: username === "" ? "Username is required" : "",
            email: validateEmail(email) ? "" : "Invalid email format",
            contactNumber: contactNumber === "" ? "Contact Number is required" : "",
            password: password === "" ? "Password is required" : "",
            confirmPassword:
                confirmPassword === password ? "" : "Passwords do not match",
        };

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            // Form is not valid, do not proceed with submission
            return;
        }

        const payload = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            contactNumber: contactNumber,
            password: password,
            confirmPassword: confirmPassword,
        };

        axios.post('http://ec2-34-199-255-228.compute-1.amazonaws.com:8083/user/register', payload)
            .then(async (response) => {
                console.log(response.data);
                setUsername('');
                setFirstName('');
                setLastName('');
                setEmail('');
                setContactNumber('');
                setPassword('');
                setConfirmPassword('');

                handleSnackbarOpen();
                await new Promise((resolve) => setTimeout(resolve, 3000));
                navigate("/login");
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.error(error);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <CustomizedTextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    value={firstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                        setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
                                    }}

                                    autoFocus
                                />
                                {errors.firstName && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {errors.firstName}
                                    </Typography>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <CustomizedTextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                        setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
                                    }}
                                    autoComplete="family-name"
                                />
                                {errors.lastName && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {errors.lastName}
                                    </Typography>
                                )}
                            </Grid>

                            <Grid item xs={12}>
                                <CustomizedTextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                                    }}
                                    autoComplete="email"
                                />
                                {errors.email && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {errors.email}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <CustomizedTextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    value={username}
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                        setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
                                    }}
                                    name="username"
                                />
                                {errors.username && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {errors.username}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <CustomizedTextField
                                    required
                                    fullWidth
                                    id="contactNumber"
                                    label="Contact Number"
                                    value={contactNumber}
                                    onChange={(event) => {
                                        setContactNumber(event.target.value);
                                        setErrors((prevErrors) => ({ ...prevErrors, contactNumber: "" }));
                                    }}
                                    name="contactNumber"
                                />
                                {errors.contactNumber && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {errors.contactNumber}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <CustomizedTextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
                                    }}
                                    autoComplete="new-password"
                                />
                                {errors.password && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {errors.password}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <CustomizedTextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(event) => {
                                        setConfirmPassword(event.target.value);
                                        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
                                    }}
                                    autoComplete="new-password"
                                />
                                {errors.confirmPassword && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {errors.confirmPassword}
                                    </Typography>
                                )}
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary"
                                            sx={{ color: "white" }}
                                        />
                                    }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                    sx={{ color: "white" }}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link
                                    href="/login"
                                    variant="body2"
                                    sx={{ color: "white", ":hover": { color: "#cb0d0d" } }}
                                >
                                    Already have an account? Sign In
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 5, color: "white" }}
                >
                    {"© "}
                    <Link
                        color="inherit"
                        href="/"
                        sx={{ mt: 5, color: "white", ":hover": { color: "#cb0d0d" } }}
                    >
                        NASA APP
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
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
                        Successfully Registered!
                    </Alert>
                </Snackbar>
            </Container>
        </ThemeProvider>
    );
}
