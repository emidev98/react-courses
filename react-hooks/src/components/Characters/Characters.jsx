import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react'
import './Characters.css';

const initialState = {
    likes: []
};

const likesReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_LIKE':
            const payloadOnState = state.likes.find(like => like.id === action.payload.id);

            if(payloadOnState) {
                return state;
            }
            else {
                return {
                    ...state,
                    likes: [...state.likes, action.payload]
                };
            }
        default:
            return state;
    }
}

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");
    const [state, dispatch] = useReducer(likesReducer, initialState);
    const searchInput = useRef(null);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    const onClickAddLike = payload => {
        dispatch({
            type: 'ADD_LIKE',
            payload
        });
    }

    const onSearch = () => {
        setSearch(searchInput.current.value);
    }

    const filteredCharacters = useMemo(()=>
        characters.filter( character => {
            return character.name
                .toLowerCase()
                .includes(search.toLowerCase());
        }),
        [characters, search]
    );

    return (
        <div className="Characters">
            <ul className="LikedCharactersList">
                {
                    state.likes.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
            <div className='SearchCharacters'>
                <input type="text"
                    ref={searchInput}
                    value={search}
                    onChange={onSearch} />
            </div>
            <div className="CharactersList">
                {filteredCharacters.map((character) => (
                    <div key={character.id} className='Character'>
                        <img src={character.image} alt={`Character ${character.name}`}/>
                        <div className='CharacterFooter'>
                            <h4>{character.name}</h4>
                            <button onClick={()=> onClickAddLike(character)}>Like</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Characters;