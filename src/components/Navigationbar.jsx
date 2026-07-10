import React from 'react'
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#0e0127" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Student Portal</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link text-white active" to="/">Add Student</Link>
              <Link className="nav-link text-white" to="/search">Search Student</Link>
              <Link className="nav-link text-white" to="/delete">Delete Student</Link>
              <Link className="nav-link text-white" to="/view">View Student</Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigationbar