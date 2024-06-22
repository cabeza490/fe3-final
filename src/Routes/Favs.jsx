import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state, dispatch} =useContextGlobal();

  const resetFavs = () => {
    dispatch({type: "RESET_FAVS", payload: []});
  };

  return (
    <div className={"divFavs "+state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.length 
          ? state.favs.map((fav) => (<Card data={fav} key={fav.id}/>))
          : null 
        }
      </div>
      {state.favs.length 
      ? <button onClick={resetFavs} className={"removeFavsBtn "+state.theme}>
        Reset favs
        </button>
      : <h4>No favs 😢</h4>}
    </div>
  );
};

export default Favs;
