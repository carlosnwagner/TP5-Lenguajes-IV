import simple from "./img/simple.jpg";
import doble from "./img/doble.jpg";
import suite from "./img/suite.jpg";

function Servicios (){
    const habitaciones= [
        {
            id: 1,
            nombre: "Habitación Simple",
            descripcion: "Habitación cómoda con cama individual, aire acondicionado y WiFi.",
            precio: "50 USD por noche",
            imagen: simple
        },
        {
            id: 2,
            nombre:"Habitación Doble",
            descripcion:"Habitación con cama matrimonial, TV por cable, cochera y vista a la ciudad.",
            precio: "80 USD por noche",
            imagen: doble
        },
        {
            id: 3,
            nombre:"Habitación Suite",
            descripcion:"Suite de lujo con sala de estar, cochera, jacuzzi, balcón y vista panorámica",
            precio: "150 USD por noche",
            imagen: suite
        },
    ];

 return (
    <div style={{ textAlign: "center" }}>
      <h1>Servicios - Habitaciones</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center", 
          marginTop: "20px",
        }}
      >
        {habitaciones.map((hab) => (
          <div
            key={hab.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              width: "280px",
              background: "white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
              textAlign: "left", 
            }}
          >
            <img
              src={hab.imagen}
              alt={hab.nombre}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h2>{hab.nombre}</h2>
            <p>{hab.descripcion}</p>
            <p>
              <strong>{hab.precio}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;