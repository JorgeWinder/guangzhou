import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Api from "../Api"

import Logo from '../img/LogoTrasparente.png'
import WhatsApp from '../img/wa.png'
import Herramienta from '../img/herramienta.png'
import './style/Navbar.css'

import Buscador from './Buscador'

export class Navbar extends Component {

    render() {
        return (
            
                <React.Fragment>

                    <div className="navbar-fixed">
                        <nav className="white">
                            <Link to="#" data-target="slide-out" className="sidenav-trigger"><i id="imenu" className="material-icons">menu</i></Link>
                            <Link to="/" className="brand-logo left">
                                <img src={Logo} alt="" className="responsive-img" width="100" style={{'marginTop': '-5px'}}/><div></div>
                            </Link>

                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <div className="div-img">
                                        <img src={WhatsApp} alt=""/>
                                        <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=51934172415&text=Hola%2C%20Guangzhou" target="_blank">Ventas : +51 934 172 415</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="div-img">
                                        <img src={Herramienta} alt=""/>
                                        <a rel="noopener noreferrer" href="#!">Servicio técnico : +51 934 172 415</a>
                                    </div>
                                </li>
                                <li>
                                    <Buscador/>
                                </li>
                            </ul>
                            {/* <ul className="right hide-on-med-and-down">
                                <li><a href="./"> </a></li>
                                <li><a href="./"> </a></li>
                                <li><Link to="./" className="tooltipped" data-position="bottom" data-tooltip="Cerrar sesión" href="." alt="Cerrar sesión"><i className="material-icons prefix">exit_to_app</i></Link></li>
                            </ul> */}

                        </nav>
                    </div>


                    <ul id="slide-out" className="sidenav">
                        <li>
                            <a href="./encuestas-asignadas" className="brand-logo center">
                            <img src={Logo} alt="" className="responsive-img" width="50"/>
                            </a>
                        </li>

                        <li><div className="divider"></div></li>
                        <li>
                            <Link href="./encuestas-asignadas" className="waves-effect" to="/home" onClick={this.handleClick}>
                                <i className="material-icons prefix">home</i>Inicio
                            </Link>
                        </li>
                        <li><div className="divider"></div></li>
                        <li>
                            <Link  href="." className="waves-effect" to="/" onClick={this.handleClick}>
                                <i className="material-icons prefix">exit_to_app</i>Cerrar sesión
                            </Link>
                        </li>
                        <li><div className="divider"></div></li>
                    </ul>


                </React.Fragment>
           
        )
    }
}

export default Navbar
