import { useEffect, useState } from "react";

function Api() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API pública sin registro: obtiene cotizaciones desde USD
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener datos de la API");
        return res.json();
      })
      .then((info) => {
        if (info.result === "success") {
          setData(info);
        } else {
          throw new Error("Respuesta inválida de la API");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudo obtener la información de la API.");
      });
  }, []);

  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  if (!data)
    return <p style={{ textAlign: "center" }}>Cargando cotizaciones...</p>;

  const monedas = [
    { codigo: "ARS", nombre: "Peso Argentino", bandera: "https://flagcdn.com/w40/ar.png" },
    { codigo: "EUR", nombre: "Euro", bandera: "https://flagcdn.com/w40/eu.png" },
    { codigo: "BRL", nombre: "Real Brasileño", bandera: "https://flagcdn.com/w40/br.png" },
    { codigo: "CLP", nombre: "Peso Chileno", bandera: "https://flagcdn.com/w40/cl.png" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>💱 Cotización de Monedas</h1>
      <h3>Base: {data.base_code}</h3>
      <p><strong>Fecha de actualización:</strong> {new Date(data.time_last_update_utc).toLocaleString()}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {monedas.map((m) => (
          <div
            key={m.codigo}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              width: "220px",
              background: "white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img src={m.bandera} alt={m.nombre} style={{ width: "60px" }} />
            <h2>{m.nombre}</h2>
            <p><strong>{m.codigo}</strong></p>
            <p>
              1 USD ={" "}
              <strong>
                {data.rates[m.codigo]
                  ? data.rates[m.codigo].toFixed(2)
                  : "N/D"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;