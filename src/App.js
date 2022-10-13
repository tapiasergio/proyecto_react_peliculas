import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Pelicula from './components/Pelicula';
import Inicio from './components/Inicio';
import Card from './components/Card';
import Error from './components/Error';
import Principal from './components/Principal';
/**import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';*/
//import Routes from './components/Routes';
import NavBarProyecto from './components/NavBarProyecto';
import React from 'react';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<NavBarProyecto />}>

          <Route index element= { <Inicio/>}></Route>
        <Route path='principal' element={ <Principal/>}></Route>
        <Route path='peliculas' element={ <Pelicula/>}></Route>
        <Route path='*' element={<Error/>}></Route>
        </Route>
        
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}
    

export default App;