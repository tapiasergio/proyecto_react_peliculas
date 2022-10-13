import React from "react";
import Imagenes from './imagenes.json'
function Card(){
    return(
        <div className="card">
            <div>
                <p> REsss</p>
                <div className="inner">{
                    Imagenes && Imagenes.map(imagenes => {
                     return(
        <div className="box" key={imagenes.id}>
            <img src={ imagenes.icon } alt="" width="300" height="200"/>
            <br />
            { imagenes.caption}
            <br/>
            {imagenes.desc}
            <br/>
            <a href={imagenes.link}>href={imagenes.link}</a>
        </div>
    )
})
                }
                    
                </div>
            </div>
        </div>
    )
}
export default Card;