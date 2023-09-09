import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import axios from 'axios';


const HomePage = ()=> {
  return(
    <div>
      <h1>¡Bienvenido a mi aplicación!</h1>
      <Link to="/otra-pagina">Ir a otra página</Link>
    </div>
  )
}

const OtraPagina = () =>{
  const [breeds, setBreeds] = useState([]);

  useEffect(()=>{
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        setBreeds(response.data.message)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return(
    <div>
      <ul>
        {Object.keys(breeds).map(breed => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};


const App = ()=> {
  return(
    <Router>
      <div style={{
        backgroundImage: 'url(background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
        fontFamily: 'Arial',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Routes>
          <Route path="/"element={<HomePage/>} />
          <Route path="/otra-pagina"element={<OtraPagina/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;