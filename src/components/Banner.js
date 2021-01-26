import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

import b1 from '../img/banner1.png'

export class Banner extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        imgsBanner: null,
        
    }

    intervalID = 0;

    componentDidMount(){

                // http://lorempixel.com/800/400/food/5     style={{"height": "100vh"}}

                const elems = document.querySelectorAll('.carousel.carousel-slider');
                M.Carousel.init( elems, {
                        fullWidth: true,
                        indicators: true
                });

                this.intervalID = setInterval(() => {
                    var instance = M.Carousel.getInstance(document.querySelector('.carousel.carousel-slider'));
                    instance.next();
                }, 5000);
    }

    // componentWillUnmount() {
    //     clearInterval(this.intervalID);
    // }

    render() {

            return (
                <section>
                            <div className="carousel carousel-slider" >

                                {/* <Link className="carousel-item" to="#one" ><img src="https://storage.googleapis.com/servicios-python-281205.appspot.com/banner1.png" alt=""/></Link>
                                <Link className="carousel-item" to="#one" ><img src="https://storage.googleapis.com/servicios-python-281205.appspot.com/banner1.png" alt=""/></Link>
*/}
                                <Link className="carousel-item" to="#one" ><img src={b1} alt=""/></Link>
                                <Link className="carousel-item" to="#one" ><img src={b1} alt=""/></Link>

                            </div>

                </section>
            )

    }
}

export default Banner
