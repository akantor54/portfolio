import React from 'react';

const Contact = () => {
    return (
        <div className='contact-page'>
             <h2>Contact</h2>
            <form>
                <label for="email">email</label><br/>
                <input id="email" id="email" type="emeil"></input><br/>
                <label for="prenom">prenom</label><br/>
                <input id="prenom" id="prenom" type="text"></input><br/>
                <label for="sujet">sujet</label><br/>
                <textarea rows="10" cols="50" id="sujet" id="sujet"/><br/>
                <button>Envoi</button>
            </form>
        </div>
    );
};

export default Contact;