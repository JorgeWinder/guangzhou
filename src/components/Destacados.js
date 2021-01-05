import React from 'react'
import { Link } from 'react-router-dom'

export default function Destacados({nombre, id, imagen}) {
    return (
                <div className="col s12 l4">
                    <div className="card z-depth-2 hoverable" >
                        <div className="card-image">
                            <img src={imagen} alt="" />
                            <span className="card-title"></span>
                        </div>
                        <div className="card-content center-align" >
                            <h6>{nombre}</h6>
                        </div>
                        <div className="card-action center-align">
                            <Link to={'/producto/' + id} className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                        </div>
                    </div>
                </div>
    )
}
