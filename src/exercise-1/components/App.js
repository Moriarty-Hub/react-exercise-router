import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Link} from 'react-router-dom';
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
                            <li className={this.isClicked.home === true? "text-with-underline": "text-without-underline"}>
                                <Link to="/" >Home</Link>
                            </li>
                            <li className={this.isClicked.myProfile === true? "text-with-underline": "text-without-underline"}>
                                <Link to="/my-profile">My Profile</Link>
                            </li>
                            <li className={this.isClicked.aboutUs === true? "text-with-underline": "text-without-underline"}>
                                <Link to="/about-us">About Us</Link>
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
