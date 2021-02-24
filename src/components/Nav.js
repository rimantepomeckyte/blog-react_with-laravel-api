import React from 'react';

const Nav = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">All Posts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Nav;