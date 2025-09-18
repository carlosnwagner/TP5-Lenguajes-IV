import React, {useState} from "react";

function SubirImagen() {
  const [preview, setPreview] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMensaje("");
    setPreview("");

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMensaje("El archivo seleccionado no es una imagen.");
      alert("El archivo que subiste no es una imagen");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Subir una Imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {mensaje && <div style={{ color: "red", fontWeight: "bold" }}>{mensaje}</div>}
      {preview && (
        <img
          src={preview}
          alt="Vista previa"
          style={{
            marginTop: "20px",
            maxWidth: "400px",
            maxHeight: "400px",
            border: "2px solid #ccc",
            padding: "5px",
            borderRadius: "8px"
          }}
        />
      )}
    </div>
  );
}

export default SubirImagen;