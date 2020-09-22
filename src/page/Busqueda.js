import React, { Component } from 'react'
// import img from '../../src/img/prod1.png'
// import marcas from '../../src/img/marcas.png'
import ProductoBusqueda from '../components/ProductoBusqueda'

import { Link } from 'react-router-dom'

import './style/producto.css' 
import M from 'materialize-css'


export class Producto extends Component {

    // state = {
    //     currentIndex : 0
    // }

    componentDidMount() {
        window.scrollTo(0, 0);

        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }


    render() {
        return (
            <React.Fragment>

                <section className="container" style={{'marginTop': '40px'}}>

                    <div className="row">

                        <div className="col l7 s12"> 

                            <Link to="/" style={{'display': 'flex', 'fontSize':'20px', 'alignItems':'center', 'color':'black'}}> 
                                <i className="material-icons dp48">arrow_back</i>
                                <span> Página de inicio</span>
                            </Link>

                        </div>

                    </div>
                    
                    <div className="row" style={{'marginTop': '-50px'}}>
                        
                        <div className="col l6 s12 left">
                            <h1 className="titulo-producto">
                                Filtro de búsqueda
                            </h1>

                            <div className="linea-producto"></div>
                        </div>

                    </div>

                    <div className='row'>

                        <div className="input-field col l6 s12">
                            <select>
                            <option value="" disabled defaultValue>Seleccione categoría o familia</option>
                            <option value="1">Motor</option>
                            <option value="2">Sistema de cambios</option>
                            <option value="3">Sistema de freno</option>
                            </select>
                            <label></label>
                        </div>

                        <div className="input-field col l6 s12">
                            <select>
                            <option value="" disabled defaultValue>Seleccione una marca</option>
                            <option value="1">JAC</option>
                            <option value="2">JIN</option>
                            <option value="3">BEI</option>
                            <option value="4">INCA POWER</option>
                            <option value="5">FOTON</option>
                            <option value="6">DONGFENG</option>
                            </select>
                            <label></label>
                        </div>

                        <div className="input-field col l6 s12">
                            <a id="idBuscar" href="#!" className="btn btn-large" style={{width: "100%", backgroundColor: "#fad655", "color":"black"}}>Buscar producto</a>
                        </div>

                    </div>


                </section>

                <ProductoBusqueda/>

            </React.Fragment>
        )
    }
}

export default Producto
