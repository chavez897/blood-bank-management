import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { useDispatch } from "react-redux";

export const NavBar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
      };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info px-3">
        <Link to="/home">
            <p className="navbar-brand text-white">Blood Bank</p>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/home">
                        <p className="nav-link text-white"> Home</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">
                        <p className="nav-link text-decoration-none text-white"> About</p>
                    </Link>
                </li>
            </ul>
            
        </div>
        <div>
            <p className="btn nav-link text-decoration-none text-white" onClick={handleLogout}> Logout</p>
        </div>
        </nav>
  );
};
