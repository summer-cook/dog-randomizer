import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1>About Us Page</h1>
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/dogs`}>Back to the Doggos!</NavLink>
            </div>
        );
    }
}

export default AboutUs;