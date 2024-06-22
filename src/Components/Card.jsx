import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ data }) => {
  const {state, dispatch } = useContextGlobal();
  const findFav = state.favs.find((item) => data.id === item.id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (findFav) {
      dispatch({type: "REMOVE_FAV", payload: data});
      console.log("removing fav");
    } else {
      dispatch({type: "ADD_FAV", payload: data});
      console.log("adding fav");
    }
  };

  return (
    <div className={"card "+state.theme}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        <Link to={"/dentist/" + data.id}>
          <img src="../../public/images/doctor.jpg" alt="doctor-detail" width={200}/>
          <h3>{data.name}</h3>
          <h4>{data.username}</h4>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          {findFav ? "Remove fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;
