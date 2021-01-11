import React, { Component } from 'react'
import marcas from '../../src/img/marcas.png'
import Api from '../Api'
import { Link } from 'react-router-dom'
import './style/producto.css'
import { Helmet } from 'react-helmet' 


export class Producto extends Component {

    state = {
        producto: null,
        producto_id: null,
        whatsappUrl: null,
    }

    handleRedireccionar = (id)=>{
        window.location = "/producto/" + id
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        console.log(this.state.producto_id)
        let codigo = this.props.match.params.producto_id
        const url = `http://localhost:3002/api-guangzhou-service/producto?codigo=${codigo}`
        const data = await Api.getData(url)
        this.setState({ producto: data.body })

        const whatsappUrl = `https://api.whatsapp.com/send?phone=51934172415&text=http%3A%2F%2Flocalhost%3A3000%2Fproducto%2F${codigo}`
        this.setState({whatsappUrl})
    }
    
    
    render() {

        return (
            <>
                <Helmet>
                    <title>{this.state.producto?.nombre}</title>
                    <meta name="description" content={this.state.producto?.descripcion}/>
                    <meta property="og:title" content={this.state.producto?.nombre}/>
                    <meta property="og:description" content={this.state.producto?.descripcion}/>
                    <meta property="og:image" content={this.state.producto?.imagen}/>
                    <meta property="og:url" content={window.location.pathname + window.location.search}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:image:alt" content={this.state.producto?.nombre}/>
                </Helmet>

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
                                            <div className="col" key={m._id}>{m.nombre}</div>
                                        )
                                    })
                                }
                            </div>
                            <p>
                                <img className="responsive-img" src={marcas} alt="" />
                            </p>
                            <a className="btn btn-large" style={{ width: "100%", backgroundColor: "#5CCB67" }} rel="noopener noreferrer" href={this.state.whatsappUrl} target="_blank">Hacer pedido via Whatsapp</a>
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
                                    // <ProductoRelacionado nombre={producto.nombre} imagen={producto.imagen}/>  
                                    <>
                                    
                                     <div className="col s12 m4 l4">
                                         <div className="card">
                                             <div className="card-image">

                                            <span className="card-title black-text"></span>
                                             </div>
                                             <div className="card-content center">
                                                 <span className="card-title">{producto.nombre}</span>
                                                 <p></p>
                                             </div>
                                             <div className="card-action center-align" >
                                                 <Link 
                                                    to="#" 
                                                    onClick={ () => this.handleRedireccionar(producto._id)} 
                                                    className="btn btn-small amber black-text">
                                                    <i className="material-icons dp48">remove_red_eye</i>Ver Producto
                                                </Link> 

                                                 
                                                {/* <Link to="#" onClick={() => this.handleClicked(producto._id)} className="btn btn-small amber black-text"><i className="material-icons dp48">remove_red_eye</i>Ver Producto</Link>  */}   
                                             </div>
                                         </div>
                                     </div>
                                    </>
                                )
                            })
                        }
                     
                    </div>
                </section>
            </>
        )
    }
}

export default Producto
