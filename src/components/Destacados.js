import React from 'react'
import { Link } from 'react-router-dom'

export default function Destacados({nombre, id, imagen}) {
    return (
                <div className="col s12 ">
                    <div className="card" >
                        <div className="card-image">
                            <img src=""alt="" />
                            <span className="card-title black-text"></span>
                        </div>
                        <div className="card-content center-align" >
                            <span>{nombre}</span>
                        </div>
                        <div className="card-action center-align">
                            <Link to={'/producto/' + id} className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                        </div>
                    </div>
                </div>
    )
}

