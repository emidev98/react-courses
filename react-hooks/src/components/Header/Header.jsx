import React, { useState, useContext } from 'react'
import ThemeContext from '../../context/ThemeContextProvider';
import './Header.css'

const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false);
    const { setTheme } = useContext(ThemeContext);

    const toggleDarkMode = () => {
        if(darkMode) setTheme("LightMode");
        else setTheme("DarkMode");

        setDarkMode(!darkMode);
    }

    return (
        <div className='Header'>
            <h1>React Hooks</h1>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Use Light' : 'Use Dark'} Mode
            </button>
        </div>
    );
}

export default Header;