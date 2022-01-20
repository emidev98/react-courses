import { useContext } from 'react';
import './App.css';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import ThemeContext from './context/ThemeContextProvider';

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`App ${theme}`}>
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
