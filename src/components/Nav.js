import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='menut' role="navigation">
            <div id="menuToggle">
          <input className="checkbox" type="checkbox" />
          
         
          <span></span>
          <span></span>
          <span></span>
          
        
          <ul id="menu">
            <div className="haut">
              <a className="secondaire github" href="https://github.com" target="_blank"><i className="git fab fa-github fa-2x"></i></a>
              <NavLink className="nav-item nav-home home" to="/"><i className="fas fa-power-off fa-lg"></i></NavLink>
              <NavLink className="nav-item principal nav-about" to="/about"><li>a propos</li></NavLink>
            </div>
            <div className="milieu">
              <NavLink className="nav-item secondaire contact" to="/contact"><li>Contact</li></NavLink>
              <NavLink className="nav-item principal projet" to="/projet"><li>projet</li></NavLink>
            </div>
            <div className="bas">
              <NavLink className="nav-item" to="/skills"><li>competence</li></NavLink>
            </div>
          </ul>
        </div>
      </nav>
    );
};

export default Nav;