import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const {state, dispatch} = useContextGlobal();
  

  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {console.log(state)}
        {state.dentists.length 
          ? state.dentists.map((dentist) => <Card data={dentist} key={dentist.id} />)
          : null
        }
      </div>
    </main>
  )
};

export default Home