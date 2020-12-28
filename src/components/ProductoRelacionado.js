import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductoRelacionado(props) {
    return (

        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto4.png" alt="" />
                    <span className="card-title black-text"></span>
                </div>
                <div className="card-content center">
                    <span className="card-title">{props.name}</span>
                    <p></p>
                </div>
                <div className="card-action center-align">
                    <Link to="/producto" className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                </div>
            </div>
        </div>

    )
}
