import React, { Component } from 'react'
import img from '../../src/img/prod1.png'
import marcas from '../../src/img/marcas.png'
import ProductoRelacionado from '../components/ProductoRelacionado'

import { Link } from 'react-router-dom'

import './style/producto.css' 


export class Producto extends Component {

    // state = {
    //     currentIndex : 0
    // }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <React.Fragment>

                <section className="container" style={{'marginTop': '40px'}}>

                    <div className="row">

                        <div className="col l7 s12"> 

                            <Link to="/busqueda" style={{'display': 'flex', 'fontSize':'20px', 'alignItems':'center', 'color':'black'}}> 
                                <i className="material-icons dp48">arrow_back</i>
                                <span> Búsqueda por categoría y marca</span>
                            </Link>

                        </div>

                    </div>
                    
                    <div className="row" style={{'marginTop': '-50px'}}>
                        <div className="col l6 s12">

                        </div>
                        <div className="col l6 s12 left">
                            <h1 className="titulo-producto">
                                Anillos std
                            </h1>

                            <div className="linea-producto"></div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col l6 s12 center">
                            <div className="marco-img-producto">
                                <img className="responsive-img" src={img} alt=""/>
                            </div>
                        </div>

                        <div className="col l6 s12">

                            <p>
                            En esta ocasión conocerás 10 Geniales inventos muy útiles para tu coche. Accesorios para tu auto realmente prácticos que te gustará conocer.
                            </p>
                            <p>
                                <span className="texto-resaltado">Categoria de producto: </span>
                                <span>Radamientos</span>
                            </p>
                            <p>
                                <span className="texto-resaltado">Repuesto para marcas: </span>
                            </p>

                            <p>
                                <img className="responsive-img" src={marcas} alt=""/>
                            </p>

                            <a href="#!" className="btn btn-large" style={{width: "100%", backgroundColor: "#5CCB67"}}>Hacer pedido via Whatsapp</a>

                        </div>
                    </div>

                </section>

                <ProductoRelacionado/>

            </React.Fragment>
        )
    }
}

export default Producto
