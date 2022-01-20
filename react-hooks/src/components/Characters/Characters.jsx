import React, { useState, useEffect } from 'react'
import './Characters.css';

function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);


    return (
        <div className="Characters">
            {characters.map((character, index) => (
                <div key={index} className='Character'>
                    <img src={character.image} alt={`Character ${character.name}`}/>
                    <h4>{character.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default Characters;