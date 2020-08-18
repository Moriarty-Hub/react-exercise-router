import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {Route} from "react-router";
import Home from "./Home";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";

class App extends Component {

    isClicked = {
        home: true,
        myProfile: false,
        aboutUs: false
    }

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
                                <NavLink activeStyle={{textDecoration: 'underline'}} to="/my-profile">My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{textDecoration: 'underline'}} to="/about-us">About Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route path="/my-profile" component={MyProfile}/>
                    <Route path="/about-us" component={AboutUs}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
