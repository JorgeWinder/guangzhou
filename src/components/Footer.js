import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>

                    <footer className="page-footer">
                        <div className="container">
                            <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Accesos rápidos</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                
                                <img className="responsive-img" src=".././src/img/LogoTrasparente.png" alt=""/>
                            </div>
                            </div>
                        </div>
                        <div className="footer-copyright">
                            <div className="container">
                            © 2020 Guangzhou S.A.
                            <a className="grey-text text-lighten-4 right" href="#!">Desarrollado por Interfaz Productos digitales</a>
                            </div>
                        </div>
                        </footer>

            </React.Fragment>
        )
    }
}

export default Footer
