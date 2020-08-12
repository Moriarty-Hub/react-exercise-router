import React from 'react';
import "../styles/App.css";

class MyProfile extends React.Component {

    render() {
        return (
            <div class="my-profile-content">
                <p>Username: XXX</p>
                <p>Gender: Female</p>
                <p>Work: IT Industry</p>
                <p>Website: '/my-profile'</p>
            </div>
        )
    }
}

export default MyProfile;
