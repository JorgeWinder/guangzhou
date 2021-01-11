import React, { Component } from 'react'
import Api from "../Api"
import M from 'materialize-css'
import './style/Buscador.css'

export default class Buscador extends Component {
    state = {
        productos: null,
    }

    handleRedireccionar = (id)=>{
        window.location = "/producto/" + id
    }

    async componentDidMount(){

        const url = "http://localhost:3002/api-guangzhou-service/producto"
        const result =  await Api.getData(url)
        const productos =  result.body
        this.setState({productos})

        const data = {}

        productos.forEach((producto) => {
            data[`${producto.nombre}`] = null;
        })


        var elems = document.querySelectorAll('.autocomplete');
        M.Autocomplete.init(elems, {
            data,
            onAutocomplete: (itemClicked) => {
                const matchingProducto = this.state.productos.find(producto => producto.nombre === itemClicked);
                const productoId = matchingProducto._id;
                this.handleRedireccionar(productoId)
            }
        });
    }

    render() {
        
        return (
            <div>
                <div className='div-buscador input-field' >   
                    <input type="text" name="buscador" id="autocomplete-input" className="autocomplete" placeholder="Busca tu repuesto, aquí" /> 
                    <i className="material-icons">search</i>
                </div>
            </div>
        )
    }
}
