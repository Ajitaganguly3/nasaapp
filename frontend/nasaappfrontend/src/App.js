import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {AuthRoutes}
        {UnAuthRoutes}
        <Route path="/details/:date" element={<Details />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

