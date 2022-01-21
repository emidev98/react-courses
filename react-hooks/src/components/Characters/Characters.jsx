import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import useCharacters from '../../hooks/useCharacters';
import Search from '../Search/Search';
import './Characters.css';

const initialState = {
    likes: []
};

const API_URL = 'https://rickandmortyapi.com/api/character/';

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
    const [state, dispatch] = useReducer(likesReducer, initialState);
    const [search, setSearch] = useState('');
    const characters = useCharacters(API_URL);
    const searchInput = useRef(null);

    const onClickAddLike = payload => {
        dispatch({
            type: 'ADD_LIKE',
            payload
        });
    }

    const handleSearch = useCallback(() => (
        setSearch(searchInput.current.value)
    ),[searchInput])

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
                <Search search={search} 
                    searchInput={searchInput} 
                    handleSearch={handleSearch}/>
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