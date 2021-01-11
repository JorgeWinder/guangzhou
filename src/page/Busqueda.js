import React, { Component } from 'react'
import Api from '../Api'

import { Link } from 'react-router-dom'

import './style/producto.css'
import M from 'materialize-css'



export class Producto extends Component {

    state = {
        categorias: null,
        marcas: null,
        productos: null,
        categoriaSelected: null,
        marcaSelected: null,
        matchingProductos: null
    }

    
    handleClick =  async () => {
        
        const matchingProductos =  [];
        this.state.productos.forEach((producto) => {
            if (producto.categoria._id == this.state.categoriaSelected){
                if (this.state.marcaSelected){
                    const foundMarca = producto.marca.find((marca) => marca._id == this.state.marcaSelected)
                    if (foundMarca) {
                        console.log("both matched", producto)
                        matchingProductos.push(producto)
                    }
                } else {
                    matchingProductos.push(producto)
                }
            }
        })

        await this.setState({ matchingProductos})
    }

    categoriaSelectedHandler = async (e) => {
        await this.setState({categoriaSelected: e.target.value})
    }

    marcaSelectedHandler = async (e) => {
        await this.setState({marcaSelected: e.target.value})
        console.log("Marca",await this.state.marcaSelected)
    }

    async componentDidMount() {

        const urlCategorias = "http://localhost:3002/api-guangzhou-service/categoria"
        const dataCategorias = await Api.getData(urlCategorias)
        const categorias = dataCategorias.body
        this.setState({ categorias })

        const urlMarcas = "http://localhost:3002/api-guangzhou-service/marca"
        const dataMarcas = await Api.getData(urlMarcas)
        const marcas = dataMarcas.body
        this.setState({ marcas })

        const urlProductos = "http://localhost:3002/api-guangzhou-service/producto"
        const dataProductos = await Api.getData(urlProductos)
        const productos = dataProductos.body
        this.setState({ productos })  
        
        window.scrollTo(0, 0);

        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
       
    }


    render() {
        return (
            <React.Fragment>
                <section className="container" style={{ 'marginTop': '40px' }}>
                    <div className="row">
                        <div className="col l7 s12">
                            <Link to="/" style={{ 'display': 'flex', 'fontSize': '20px', 'alignItems': 'center', 'color': 'black' }}>
                                <i className="material-icons dp48">arrow_back</i>
                                <span> Página de inicio</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row" style={{ 'marginTop': '-50px' }}>
                        <div className="col l6 s12 left">
                            <h1 className="titulo-producto">
                                Filtro de búsqueda
                            </h1>
                            <div className="linea-producto"></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-field col l6 s12">
                            <select onChange={this.categoriaSelectedHandler}> 
                                <option value="" defaultValue>Seleccione categoría o familia</option>
                                {
                                    this.state.categorias?.map(categoria => {
                                        return (
                                            <option value={categoria._id}>{categoria.nombre}</option>
                                        )
                                    })
                                }
                            </select>
                            <label></label>
                        </div>
                        <div className="input-field col l6 s12">
                            <select onChange={this.marcaSelectedHandler}>
                                <option value=""  defaultValue>Seleccione una marca</option>
                                {
                                    this.state.marcas?.map(marca => {
                                        return (
                                            <option value={marca._id}>{marca.nombre}</option>
                                        )
                                    })
                                }
                            </select>
                            <label></label>
                        </div>
                        <div className="input-field col l6 s12">
                            <a id="idBuscar" href="#!" onClick= {this.handleClick}className="btn btn-large" style={{ width: "100%", backgroundColor: "#fad655", "color": "black" }}>Buscar producto</a>
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
                            this.state.matchingProductos?.map( producto => {
                                return (
                                    <div className="col s12 m4 l4">
                                    <div className="card">
                    
                                <div className="card-image">
                                    <img src="https://storage.googleapis.com/contenido-web/storage-img/productos/producto4.png" alt=""/>
                                    <span className="card-title"></span>
                                </div>
                                <div className="card-content center">
                                    <span className="card-title">{producto.nombre}</span>
                                </div>
                                <div className="card-action center-align">
                                    <Link to={"/producto/" + producto._id} className="btn btn-small amber black-text"><i className="material-icons dp48 ">remove_red_eye</i>Ver Producto</Link>
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
