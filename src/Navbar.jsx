import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Inicio</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;