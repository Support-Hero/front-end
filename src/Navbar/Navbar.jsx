import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar bg-body-secondary px-5">
      <div className="d-flex">
        <Link to="/" class="navbar-brand">
          Support Hero
        </Link>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
      <label style={{marginRight:"40px"}}>About</label>
      <Link to="/login" >Log in</Link>
      </div>
    </nav>
  );
};
export default Navbar;
