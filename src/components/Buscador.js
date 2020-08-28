import React, { Component } from 'react'
import Lupa from '../img/lupa.png'

import './style/Buscador.css'

export default class Buscador extends Component {
    render() {
        return (
            <div>
                <div className='div-buscador'>
                    <input type="text" name="buscador" id="buscador" placeholder="Busca tu repuesto, aquí"/>
                    <img src={Lupa} alt=""/>
                </div>
            </div>
        )
    }
}
