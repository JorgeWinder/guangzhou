import React, { Component } from 'react'
import img from '../../src/img/prod1.png'
import marcas from '../../src/img/marcas.png'
import ProductoRelacionado from '../components/ProductoRelacionado'
import Api from '../Api'


import { Link } from 'react-router-dom'

import './style/producto.css'




export class Producto extends Component {

    state = {
        producto: null,
    }

    handleRedireccionar = (id)=>{
        window.location = "/producto/" + id
    }

    

    async componentDidMount() {
        window.scrollTo(0, 0);
        let codigo = this.props.match.params.producto_id
        const url = `http://localhost:3002/api-guangzhou-service/producto?codigo=${codigo}`
        const data = await Api.getData(url)
        this.setState({ producto: data.body })

    }

   

    render() {

      

        return (
            <React.Fragment>
                <section className="container" style={{ 'marginTop': '40px' }}>
                    <div className="row">
                        <div className="col l7 s12">
                            <Link to="/busqueda" style={{ 'display': 'flex', 'fontSize': '20px', 'alignItems': 'center', 'color': 'black' }}>
                                <i className="material-icons dp48">arrow_back</i>
                                <span> Búsqueda por categoría y marca</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row" style={{ 'marginTop': '-50px' }}>
                        <div className="col l6 s12">
                        </div>
                        <div className="col l6 s12 left">
                            <h1 className="titulo-producto">
                                {this.state.producto?.nombre}
                            </h1>
                            <div className="linea-producto"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l6 s12 center">
                            <div className="marco-img-producto">
                                <img className="responsive-img" src={this.state.producto?.imagen} alt="" />
                            </div>
                        </div>
                        <div className="col l6 s12">
                            <p>
                                {this.state.producto?.descripcion}
                            </p>
                            <p>
                                <span className="texto-resaltado">Categoria de producto: </span>
                                <span>{this.state.producto?.categoria.nombre}</span>
                            </p>
                            <p>
                                <span className="texto-resaltado">Repuesto para marcas: </span>
                            </p>
                            <div className="row">
                                {
                                    this.state.producto?.marca.map((m) => {
                                        return (
                                            <div className="col">{m.nombre}</div>
                                        )
                                    })
                                }
                            </div>
                            <p>
                                <img className="responsive-img" src={marcas} alt="" />
                            </p>
                            <a href="#!" className="btn btn-large" style={{ width: "100%", backgroundColor: "#5CCB67" }}>Hacer pedido via Whatsapp</a>
                        </div>
                    </div>
                </section>
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
                       
                        {
                            this.state.producto?.productoRelacionado.map((producto) => {
                                return (
                                    // <ProductoRelacionado id={producto._id} nombre={producto.nombre}/>  
                                    <div className="col s12 m4 l4">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto4.png" alt="" />
                                                <span className="card-title black-text"></span>
                                            </div>
                                            <div className="card-content center">
                                                <span className="card-title">{producto.nombre}</span>
                                                <p></p>
                                            </div>
                                            <div className="card-action center-align" >
                                                {/* <Link to={'/producto/' + producto._id} className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link> */}
                                                <Link to="#" onClick={ () => this.handleRedireccionar(producto._id)} className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                     
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Producto
