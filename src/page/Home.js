import React, { Component } from 'react'

import Banner from '../components/Banner'
import Marcas from '../components/Marcas'
import Destacados from '../components/Destacados'
import Consejos from '../components/Consejos'

import './style/Home.css' 

export class Home extends Component {

    // state = {
    //     currentIndex : 0
    // }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div>

                <Banner/>
                <Marcas/>

                <div className="home-fondo">
                    
                    <Destacados/>
                    <Consejos/>
                </div>

            </div>
        )
    }
}

export default Home
