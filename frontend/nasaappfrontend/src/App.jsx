

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';

import Footer from "./components/Footer";
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {AuthRoutes}
        {UnAuthRoutes}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

