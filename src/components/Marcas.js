import React, { Component } from 'react'
import './style/Marcas.css'

export class Marcas extends Component {
    render() {
        return (
            <section className="container container-marcas">
                <h1 className="titulo-home">
                    Tenemos todos los respuestos para todas estas marcas
                </h1>

                <div className="linea-titulo"></div>

                <div className="row">
                    <div className="col s12 l3"><img src="https://storage.googleapis.com/contenido-web/storage-img/marcas/jac.png" className="responsive-img" alt=""/></div>
                    <div className="col s12 l3"><img src="https://storage.googleapis.com/contenido-web/storage-img/marcas/jimbei.png" className="responsive-img" alt=""/></div>
                    <div className="col s12 l3"><img src="https://storage.googleapis.com/contenido-web/storage-img/marcas/faw.png" className="responsive-img" alt=""/></div>
                    <div className="col s12 l3"><img src="https://storage.googleapis.com/contenido-web/storage-img/marcas/jmc.png" className="responsive-img"  alt=""/></div>
                </div>
            </section>
        )
    }
}

export default Marcas
