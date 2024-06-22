import React from 'react'
import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const {state, dispatch} = useContextGlobal();

  const changeTheme = () => {
    if (state.theme === "dark") {
      dispatch({type: "TOGGLE_THEME", payload: ""});
    } else {
      dispatch({type: "TOGGLE_THEME", payload: "dark"})
    }
  }

  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">
        <img src="../../public/DH.ico" alt="" />
      </Link>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme} className={state.theme}>
        {state.theme === "dark"? "☀️" : "🌙"}
      </button>
    </nav>
  )
}

export default Navbar