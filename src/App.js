import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
const App = () => (
    <Router>
        <Switch>
            <Route path='/Dashboard' exact component={Dashboard} />
            <Route path='/Product' component={Product} />
            <Route path='/ProductList' component={ProductList} />
            <Route path='/ProductDetail' component={ProductDetail} />
        </Switch>
    </Router>
)
export default App