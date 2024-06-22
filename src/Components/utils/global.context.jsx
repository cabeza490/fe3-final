import { createContext, useContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext();

export const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = {
  theme: "", 
  dentists: [],
  favs: lsFavs
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return {...state, dentists: action.payload};
    case "GET_DENTIST":
      return {...state, theme: action.payload};
    case "TOGGLE_THEME":
      return {...state, theme: action.payload};
    case "ADD_FAV":
      return {...state, favs: [...state.favs, action.payload]};
    case "REMOVE_FAV":
      const filterFavs = state.favs.filter(
        (item) => item.id !== action.payload.id
      );
      return {...state, favs: filterFavs}; 
    default:
      throw new Error("Error al modificar el estado");
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const getDentists = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({type: "GET_DENTISTS", payload: data});
    console.log("state");
  };

  useEffect(() => {
    getDentists();
    console.log("useEffect");
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);