import { useNavigate } from "react-router-dom";
import React from "react";
import Logo from "./Images/cineimg.jpg";
//import Button from 'react-bootstrap/Button';

const  Inicio = () =>{
    const navigate = useNavigate();
    return(
      <div>

      <header className="Inicio-footer">
        <img className="App-logo" src={Logo} alt="Cargando"></img>
      </header>
      <footer className="Inicio-footer">
      
        <button class="botonRetorno" onClick={() => navigate ("./Pelicula")}>
            Peliculas
        </button>
        <button class="botonRetorno" onClick={() => navigate ("./Card")}>
            Card
        </button>
        <a href="https://github.com/tapiasergio">
        <button>Repositorio</button>
        </a>
      </footer>
      </div>
    
    
    );
}
export default Inicio;