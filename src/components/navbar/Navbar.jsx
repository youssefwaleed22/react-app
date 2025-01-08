import React from 'react'
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    
  <nav className="navbar navbar-expand-lg bgblue">
    <div className="container-fluid">
     <Link className="navbar-brand fs-2 ps-5 text-white roboto text-uppercase" to="/">start framework</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-4">
          <li className="nav-item">                              
                                                               {/* / => empty path   */}
           <NavLink className="nav-link  text-white   fs-5 " aria-current="page"  to={"/about"} >ABOUT</NavLink>
          </li>
          <li className="nav-item">
           <NavLink className="nav-link text-white   fs-5 " to={"/portfolio"}>PORTFOLIO</NavLink>
          </li>
          <li className="nav-item">
           <NavLink className="nav-link text-white contact fs-5 " to={"/contact"}>CONTACT</NavLink>
          </li>
        
    
          
        </ul>
      
      </div>
    </div>
  </nav>
  </>
  )
}
