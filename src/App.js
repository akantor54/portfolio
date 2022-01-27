import React from 'react';
import Nav from './components/Nav';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Logo from './components/Logo';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const app = () => {
    return (
        <div className='main'>
            <BrowserRouter >
                <Nav/>
                <Routes>
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/projet" element={<h1>projets</h1>} />
                    <Route exact path="/skills" element={<Skills/>} />
                    <Route exact path="/contact" element={<Contact/>} />
                    <Route  exact path="/" element={<Logo/>} />
                </Routes>
            </BrowserRouter >
        </div>
    );
};

export default app;