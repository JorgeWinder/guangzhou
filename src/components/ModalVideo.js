import React, { Component } from 'react';

import Iframe  from 'react-iframe'
import M from 'materialize-css'
// import { Link } from 'react-router-dom';

class ModalVideo extends Component {
    
    state = {  }

    componentDidMount(){

        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems)

    }
    
    render() { 
        return ( 

            <React.Fragment>
                
                <div className="card-action video-action">
                        <i className="small material-icons">play_circle_outline</i>
                        <a className="modal-trigger" href="#modal1" style={{border: "0"}}>Mira este video</a>
                </div>

                <div id="modal1" className="modal center">
                    <div className="modal-content">
                    {/* <h5>FERIA DE CANTON - FEBRERO 2020</h5> */}
                    
                        <Iframe url="https://www.youtube.com/embed/TRU1-h23D1Q"
                            width="100%"
                            height="350px"
                            id="myId"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen 
                        />
                   
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Salir</a>
                    </div>
                </div>                
                
            </React.Fragment>

         );
    }
}

export default ModalVideo;