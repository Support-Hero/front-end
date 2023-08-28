import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"inherit"}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Support Hero
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/workers" className="dropdown-item" href="#">
                    workers
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="dropdown-item" href="#">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link to="/rosters" className="dropdown-item" href="#">
                    Rosters
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/notes" className="dropdown-item" href="#">
                    Notes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="d-flex navbar-nav">
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
