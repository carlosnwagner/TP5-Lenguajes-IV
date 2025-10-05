import API from "./Api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contacto from "./Contacto";
import Servicios from "./Servicios";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;