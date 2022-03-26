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
    <nav className="navbar navbar-expand-sm navbar-light bg-info px-3">
      <Link to="/donors">
        <p className="navbar-brand text-white">Blood Bank</p>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/donors">
              <p className="nav-link text-decoration-none text-white"> Donors</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipients">
              <p className="nav-link text-decoration-none text-white"> Recipients</p>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p
          className="btn nav-link text-decoration-none text-white"
          onClick={handleLogout}
        >
          Logout
        </p>
      </div>
    </nav>
  );
};
