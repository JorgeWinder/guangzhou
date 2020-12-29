import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout';
import Home from '../page/Home' 
import Producto from '../page/Producto' 
import Busqueda from '../page/Busqueda' 


function App() {
    return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/producto/:producto_id" component={Producto} />
                        <Route exact path="/busqueda" component={Busqueda} />
                    </Switch>
                </Layout>
            </BrowserRouter>

        )
    }

export default App
