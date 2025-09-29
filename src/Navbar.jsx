import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#2c3e50",   // Fondo oscuro
      display: "flex",
      justifyContent: "center",
      gap: "20px"
    }}>
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Inicio
      </Link>
      <Link
        to="/servicios"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Servicios
      </Link>
      <Link
        to="/contacto"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Contacto
      </Link>
    </nav>
  );
}

export default Navbar;