import { useState } from 'react';
import './App.css';
//import SearchBar from './components/searchbar/SearchBar';
//import characters from "./data.js"
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";

function App () {
  // creamos un estado donde tengamos el array de personajes
  const[characters, setCharacters] = useState([]);

// funcion onclose

  const onClose =(id)=>  {
    setCharacters(characters.filter(char=>char.id !==id))
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
          <Nav onSearch={onSearch} /> 
        </div>
        <Routes>
          <Route 
            path="/home" 
            element={<Cards characters={characters} 
            onClose={onClose}/>} 
          />
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:detailId" element={<Detail/>} />
        </Routes>
    </div>
  )
}

export default App

/*  <Routes>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>*/