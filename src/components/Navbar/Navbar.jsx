import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
// import projectlog from '../../../public/project-logo.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg">
        <div className="container">
            <Link className="navbar-brand text-white fs-4 me-5" to="">
                <img src={'http://ingenioushubs.com/Allhallows/images/header-logo.png'} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link text-white fs-4 me-2" aria-current="page" to="">Home</Link>
                <Link className="nav-link text-white fs-4 me-2" to="about">About</Link>
                <Link className="nav-link text-white fs-4 me-2" to="artist">Artist</Link>
                {/* <Link className="nav-link text-white fs-4 me-2" to="gallery">Gallery</Link> */}
                <Link className="nav-link text-white fs-4 me-2" to="contacts">Contacts</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar