import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <NavLink to={`/aboutus`}>About Us</NavLink>
                <NavLink to={`/dogs`}>Enter!</NavLink>
            </div>
        );
    }
}

export default Home;