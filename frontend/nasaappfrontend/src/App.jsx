

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

