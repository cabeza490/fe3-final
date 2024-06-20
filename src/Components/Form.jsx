import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const mensajeError = "Por favor verifique su información nuevamente";
  const mensajeExito = "Gracias "+nombreCompleto+", te contactaremos cuando antes vía mail";

  const onChangeNombreCompleto = (e) => setNombreCompleto(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const validarNombreCompleto = (nombre) => {
    if (nombre.length > 5) {
      return true;      
    } else {
      return false;
    }
  };

  const validarEmail = (email) => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (regex.test(email)) {
      return true
    } else {
      return false
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (validarNombreCompleto(nombreCompleto) 
      && validarEmail(email)) {
      console.log(nombreCompleto, " - ", email);
      console.log("Formulario enviado");
      setMensaje(mensajeExito)
    } else {
      // algo va mal
      setMensaje(mensajeError)
    }

  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
      <label htmlFor="nombreCompleto">Nombre: </label>
      <input 
        type="text"
        placeholder="Nombre de usuario"
        value={nombreCompleto}
        onChange={onChangeNombreCompleto}
        id="nombreCompleto"
      />
      <label htmlFor="email">Email: </label>
      <input 
        type="email" 
        placeholder="nombre@email.com"
        value={email}
        onChange={onChangeEmail}
        id="email" 
      />
      <button type="submit">Enviar</button>
      </form>
      <h4>{mensaje}</h4>
    </div>
  );
};

export default Form;
