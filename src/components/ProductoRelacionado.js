import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductoRelacionado extends Component {

    state = {  }
    
    render() { 
        return ( 
            <React.Fragment>

            <section className="container">

                    <div className="row">

                        <div className="col l6 s12 left">
                            <h1 className="titulo-producto">
                                Productos relacionados
                            </h1>

                            <div className="linea-producto"></div>
                        </div>

                    </div>

                  

                    <div className="row">

                        <div className="col s12 m4 l4">
                            <div className="card">
                    
                                <div className="card-image">
                                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto4.png" alt=""/>
                                    <span className="card-title black-text"></span>
                                </div>
                                <div className="card-content center">
                                    <span className="card-title">Bases de termostato</span>
                                    <p></p>
                                </div>
                                <div className="card-action center-align">
                                    <Link to="/producto" className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4 l4">
                            <div className="card">
                    
                                <div className="card-image">
                                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto3.png" alt=""/>
                                    <span className="card-title black-text"></span>
                                </div>
                                <div className="card-content center">
                                    <span className="card-title">Bomba de agua</span>
                                    <p></p>
                                </div>
                                <div className="card-action center-align">
                                    <Link to="/producto" className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                                </div>
                            </div>
                        </div>


                        <div className="col s12 m4 l4">
                            <div className="card">
                    
                                <div className="card-image">
                                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto2.png" alt=""/>
                                    <span className="card-title black-text"></span>
                                </div>
                                <div className="card-content center">
                                    <span className="card-title">Bomba de agua</span>
                                    <p></p>
                                </div>
                                <div className="card-action center-align">
                                    <Link to="/producto" className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                                </div>
                            </div>
                        </div>

                        


                    </div>

                    

            </section>

            </React.Fragment>
         );
    }
}
 
export default ProductoRelacionado;