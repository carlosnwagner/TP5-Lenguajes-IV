import { useState } from "react";
import emailjs from "emailjs-com";

function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.mensaje) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(form.correo)) {
      alert("Ingrese un correo válido");
      return;
    }

    emailjs
      .send(
        "service_su8cgji",   
        "template_yv9pv5a",  
        form,
        "i8ETKfL5hF-fPYPWR"       
      )
      .then(() => {
        alert("Correo enviado correctamente");
        setForm({ nombre: "", correo: "", mensaje: "" });
      })
      .catch((err) => {
        alert("Error al enviar: " + err.text);
      });
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo:</label><br />
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mensaje:</label><br />
          <textarea
            name="mensaje"
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;