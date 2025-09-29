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
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Formulario */}
      <form onSubmit={handleSubmit} style={{ flex: 1 }}>
        <h2>Contacto</h2>
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

      <div style={{ flex: 1 }}>
        <h2>Ubicación</h2>
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.088353868442!2d-58.38375938476926!3d-34.603684465000514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7c0b381fd%3A0xf93a1d7cddf8ef!2sObelisco%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1675543300000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;