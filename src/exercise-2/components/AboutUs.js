import React from 'react';
import "../styles/App.css";
import {Link} from "react-router-dom";

class AboutUs extends React.Component {

    render() {
        return (
            <div class="about-us-content">
                <p>Company: ThoughtWorks Local</p>
                <p>Location: Xi'an</p>

                <p>For more information, please</p>
                <p>view our <Link to="/">website</Link></p>
            </div>
        )
    }
}

export default AboutUs;
