import React from 'react';
import desarrolladores from '../desarrolladores.json';

function Desarrolladores()  {
        return(
        <div className='card-diseñadores-bg'>
       {desarrolladores.map(grupo => {
        return(
            <div className='card-diseñadores'>
            <div className='card-grupo'>
            <div className='card-linea'></div>
            <div className='img-des'> 
            <img src={grupo.imagen} alt="desa"></img>
            </div>
            <div className='card-contenido'>
                <div className='card-detalle'>
                    <h2>{grupo.Nombre} <br></br><span>Desarrollador</span></h2>
                    <div className='card-datos'>
                        <h3>{grupo.descripcion}
                        <br></br>
                        <span>
                        <a href={grupo.repositorio}>Repositorio </a>
                        </span>
                        </h3>
                    </div>
                </div>
            </div>
            
        </div>
            </div>
            
            );
       })}
        
        </div>
        
       );
   
    
}
export default Desarrolladores;