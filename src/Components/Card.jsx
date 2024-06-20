import React from "react";
import { Link } from "react-router-dom";


const Card = ({ data }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        <Link to={"/dentist/" + data.id}>
          <img src="../../public/images/doctor.jpg" alt="doctor-detail" width={200}/>
          <h3>{data.name}</h3>
          <h4>{data.username}</h4>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          Add fav</button>
    </div>
  );
};

export default Card;
