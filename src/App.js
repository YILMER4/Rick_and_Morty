import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';

function App () {
  // creamos un estado donde tengamos el array de personajes
  const[characters, setCharacters] = useState([]);

// funcion onclose

  function onclose(){
    setCharacters(characters.filter((element)=>element.name !==name))
  }

  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
      } else {
          window.alert('No hay personajes con ese ID');
      }
    });
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <nav onSearch={onSearch} /> 
      </div>
      <div>
        <Cards
          characters={characters} onclose={onclose}
        />
      </div>
    </div>
  )
}

export default App
