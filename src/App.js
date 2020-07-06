import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
const App = () => (
    <Router>
        <Switch>
            <Route path='/Dashboard' exact component={Dashboard} />
            <Route path='/Product' component={Product} />
        </Switch>
    </Router>
)
export default App