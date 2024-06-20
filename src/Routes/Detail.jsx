import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});
  const {id} = useParams();
  console.log(id);

  const getDentist = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          <img src="../../public/images/doctor.jpg" alt="doctor-detail" width={400}/>
      <h4>Nombre: {dentist.name}</h4>
      <h4>Email: {dentist.email}</h4>
      <h4>Teléfono: {dentist.phone}</h4>
      <h4>Website: {dentist.website}</h4>
    </>
  )
}

export default Detail