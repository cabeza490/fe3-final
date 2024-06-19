import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const getDentists = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.length 
          ? dentists.map((dentist) => <Card data={dentist} key={dentist.id} />)
          : null
        }
      </div>
    </main>
  )
}

export default Home