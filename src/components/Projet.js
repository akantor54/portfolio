import React from 'react';
import lador from "../assets/lador.JPG"
const Projet = () => {
    return (
        <div className='project'>
            <div>
                <h2>Projets</h2>
                <div className='project-list'>
                    <div className='lador'>
                        <img className='image' src={lador}/>
                        <p>Projet html/css</p>
                        <a href="https://github.com/akantor54/agence-ledor"  target="_blank" className='btn'>Source</a>
                        <a href="https://akantor54.github.io/agence-ledor/" target="_blank" className='btn'>site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projet;