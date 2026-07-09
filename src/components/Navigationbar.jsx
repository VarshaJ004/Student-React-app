import React from 'react'

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
              <a className="nav-link text-white active" href="/">Add Student</a>
              <a className="nav-link text-white" href="/search">Search Student</a>
              <a className="nav-link text-white" href="/delete">Delete Student</a>
              <a className="nav-link text-white" href="/view">View Student</a>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigationbar