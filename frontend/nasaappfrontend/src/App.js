import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import Details from "./pages/Details";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  return (
    <Router>
      <NavBar />
      <Routes>
        {loggedIn ? (
          <React.Fragment>

            <Route key="Home" path="/" element={<Home />}></Route>
            {AuthRoutes}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route key="Login" path="/login" element={<Login />} ></Route>
            {UnAuthRoutes}
          </React.Fragment>
        )}
        <Route path="/details/:date" element={<Details />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

