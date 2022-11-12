import React from 'react';
import peliculas from '../peliculas.json';

function Pelicula()  {
    
    return(
        <div className='peli-conteiner'>
       {peliculas.map(peli => {
        return(
            <div className='peli-item'>
                <header>
                <img className='peli-image'src={peli.imagen}  alt='des' width="400" height="250"></img>
                </header>

                <body className='peli-body'>
                <div className='peli-body-item'>
                <h1>{peli.titulo}</h1>
                <h6>Dirección : {peli.Dirección}</h6>
                </div>
                <div className='desc-peli'>
                <p >{peli.descripcion}</p>
                </div>
                </body>
            </div>
            
            );
       })}
        </div>
       );
    
}
export default Pelicula;