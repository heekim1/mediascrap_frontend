import React, { Component } from 'react';

// Stateless Functional Component (only single render method)
/*
const NavBar = ({ totalCounters }) => {
    render() { 
        return (
            <nav class="navbar bg-body-tertiary">
                <a class="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}
*/

class NavBar extends Component {
    render() {
        console.log("NavBar Rendered") 
        return (
            <nav className="navbar bg-body-tertiary">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}
 
export default NavBar;