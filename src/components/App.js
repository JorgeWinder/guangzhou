import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout';
import Home from '../page/Home' 
import Producto from '../page/Producto' 


function App() {
    return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/producto" component={Producto} />
                    </Switch>
                </Layout>
            </BrowserRouter>

        )
    }

export default App
