import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Customers from '../Customers/Customers';
import NewCustomer from '../NewCustomer/NewCustomer';
import Orders from '../Orders/Orders';


import './app.css';
const App =()=>{
    return(
        <main>
            <Router>
                <header>
                    <nav>
                        <NavLink to='/Customers' activeClassName='active'>Customers</NavLink>
                        <NavLink to='/NewCustomer' activeClassName='active'>New Customer</NavLink>
                    </nav>
                </header>
                <Route path='/Customers' component={Customers}/>
                <Route path='/Orders' component={Orders}/>
                <Route path='/NewCustomer' component={NewCustomer}/>
            </Router>
        </main>
    )
}

export default App