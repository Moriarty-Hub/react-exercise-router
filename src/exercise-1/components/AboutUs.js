import React from 'react';
import "../styles/App.css";

class AboutUs extends React.Component {

    render() {
        return (
            <div class="about-us-content">
                <p>Company: ThoughtWorks Local</p>
                <p>Location: Xi'an</p>

                <p>For more information, please</p>
                <p>view our <a href="/">website</a></p>
            </div>
        )
    }
}

export default AboutUs;
