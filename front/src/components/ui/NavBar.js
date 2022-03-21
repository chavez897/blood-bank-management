import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link to="/home">
            <p className="navbar-brand">Blood Bank</p>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/home">
                        <p className="nav-link"> Home</p>
                    </Link>
                </li>
                <li className="nav-item text-decoration-none">
                    <Link to="/about">
                        <p className="nav-link text-decoration-none"> About</p>
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
  );
};
