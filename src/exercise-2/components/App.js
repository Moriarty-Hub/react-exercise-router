import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, NavLink, Switch} from 'react-router-dom';
import {Route} from "react-router";
import Home from "./Home";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Product from "./Product";

class App extends Component {

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeStyle={{textDecoration: 'underline'}} exact to="/" >Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{textDecoration: 'underline'}} to="/products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{textDecoration: 'underline'}} to="/my-profile">My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{textDecoration: 'underline'}} to="/about-us">About Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/(products|goods)" component={Products}/>
                        <Route exact path="/products/:id(\d+)" component={Product}/>
                        <Route exact path="/my-profile" component={MyProfile}/>
                        <Route exact path="/about-us" component={AboutUs}/>
                        <Route component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
