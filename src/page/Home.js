import React, { Component } from 'react'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet'
import Destacados from '../components/Destacados'
import Consejos from '../components/Consejos'
import Api from "../Api"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style/Home.css' 


export class Home extends Component {
    state = {
                productosDestacados: null,
             }
        
    async componentDidMount() {
        const url = "http://localhost:3002/api-guangzhou-service/producto"
        const data = await Api.getData(url)
        const productosDestacados = data.body.filter(producto => producto.destacado).slice(0,4)
        this.setState({ productosDestacados })   
    }
        
    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false,
        }

        return (
            <div>
                <Helmet>
                <title>Corporación Guangzhou</title>
                </Helmet>
                <Banner/>
                {/* <Marcas/> */}
                <section className="container container-marcas">
                <h1 className="titulo-home">
                    Tenemos todos los respuestos para todas estas marcas
                </h1>
                <div className="linea-titulo"></div>
                </section>
                <div className="home-fondo"> 
                <section className="container">
                    <h1 className="titulo-home">
                        Productos destacados
                    </h1>
                    <div className="linea-titulo"></div>
                        <div className="row">
                         <Slider style={{ paddingLeft: "80px"}} {...settings}>
                         {
                                this.state.productosDestacados?.map(producto => {
                                    return(
                                    <Destacados nombre={producto.nombre} id={producto._id} imagen={producto.imagen}/>
                                    ) 
                                })
                            }

                         </Slider>
                        </div>
                </section>
                </div>
                <Consejos/>

            </div>
        )
    }
}

export default Home
