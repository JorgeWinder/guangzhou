import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Destacados extends Component {
    render() {
        return (

            <section className="container">

                <h1 className="titulo-home">
                    Productos destacados
                </h1>

                <div className="linea-titulo"></div>
                

                <div className="row">
                    <div className="col s12 l4">

                            <div className="card z-depth-2 hoverable">
                                <div className="card-image">
                                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto4.png" alt=""/>
                                    <span className="card-title"></span>
                                </div>
                                <div className="card-content center-align">
                                    <h6>Anillos std</h6>
                                </div>
                                <div className="card-action center-align">
                                    <Link to="/producto" className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                                </div>
                            </div>

                    </div>

                    <div className="col s12 l4">

                    <div className="card z-depth-2 hoverable">

                            <div className="card-image">
                                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto3.png" alt=""/>
                                    <span className="card-title"></span>
                                </div>
                                <div className="card-content center-align">
                                <h6>Plato Presor</h6>
                                </div>
                                <div className="card-action center-align">

                                    <Link to="/producto" className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                                    
                                </div>
                            </div>

                    </div>

                    <div className="col s12 l4">

                            <div className="card z-depth-2 hoverable">
                            
                                <div className="card-image">
                                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto2.png" alt=""/>
                                    <span className="card-title"></span>
                                </div>
                                <div className="card-content center-align">
                                <h6> Valvula de freno de aire</h6>
                                </div>
                                <div className="card-action center-align">
                                    <Link to="/producto" className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                                </div>
                            </div>
                        
                    </div>    


                </div>


            </section>
        )
    }
}

export default Destacados
