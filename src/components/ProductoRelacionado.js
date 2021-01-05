import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductoRelacionado({nombre, id, imagen}) {
   
    return (

        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={imagen} alt="" />
                    <span className="card-title black-text"></span>
                </div>
                <div className="card-content center">
                 
                    <span className="card-title">{nombre}</span>
                    <p></p>
                </div>
                <div className="card-action center-align" >
                    <Link to={"/prodcuto/" + id} className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                </div>
            </div>
        </div>

    )
}
