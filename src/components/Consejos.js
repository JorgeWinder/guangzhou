import React, { Component } from 'react'
import img from '../img/video.png'

import "./style/Consejos.css"

export class Consejos extends Component {
    render() {
        return (
            <section className="container">
                <h1 className="titulo-home">
                    Consejos y recomendaciones
                </h1>
                <div className="linea-titulo"></div>

                    <div className="card horizontal z-depth-3">
                            <div className="card-image">
                                <img src={img} alt=""/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                <p className="video-texto">En esta ocasión conocerás 10 Geniales inventos muy útiles para tu coche. Accesorios para tu auto realmente prácticos que te gustará conocer.</p>
                                </div>
                                <div className="card-action video-action">
                                <i className="small material-icons">play_circle_outline</i>
                                <a href="/">Mira este video</a>
                                </div>
                            </div>
                    </div>

            </section>
        )
    }
}

export default Consejos
