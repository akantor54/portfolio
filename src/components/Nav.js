import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="menu">
            <div className='haut'>
               <div className='reseau'>
               <a href="https://github.com/akantor54" className=" icon-git"><i className="git fab fa-github fa-2x"></i></a>
                <a href="https://github.com/akantor54" className=" icon-git"><i className="fab fa-linkedin-in fa-2x"></i></a>
                <a href="https://github.com/akantor54" className="icon-git"><i className="fab fa-discord fa-2x"></i></a> 
                </div>
                <NavLink to="/" className="nav-item principal nav-home"><i class="fas fa-power-off fa-lg"></i></NavLink> 

                <NavLink to="/about" className="nav-item principal nav-about">A propos</NavLink> 
            </div>
            <div className='milieu'>
                <div className='projet'>
                    <NavLink to="/about" className="nav-item secondaire nav-about">Projets</NavLink> 
                </div>
                <div className='contact'>
                    <NavLink to="/contact" className="nav-item principal nav-about">Contact</NavLink> 
                </div>
            </div>
            <div className='bas'>
                <div className='projet'>
                    <NavLink to="/skills" className="nav-item secondaire nav-about">Competences</NavLink> 
                </div>
            </div>
        </div>
    );
};

export default Nav;