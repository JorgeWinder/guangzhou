import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Marcas from '../components/Marcas'
import Destacados from '../components/Destacados'
import Consejos from '../components/Consejos'
// import Footer from '../components/Footer'


import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';


import './style/Home.css' 

export class Home extends Component {

    // state = {
    //     currentIndex : 0
    // }

    // setNextImage= () => {
    //     // setState method is used to update the state
    //        let index = this.state.currentIndex
    //        if(index === 2)
    //        this.setState({ currentIndex: this.state.currentIndex -1 });
    // }

    // componentDidUpdate(){
    //     setTimeout(this.setNextImage, 2000);
        
    // }


    render() {
        return (
            <div>
                <Navbar/>
                 <Banner/>
                {/* <AwesomeSlider cssModule={AwesomeSliderStyles}>
                    <div data-src="https://storage.googleapis.com/servicios-python-281205.appspot.com/banner1.png" />
                    <div data-src="https://storage.googleapis.com/servicios-python-281205.appspot.com/banner1.png" />
                </AwesomeSlider> */
                }

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
