

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

