import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
//import SearchBar from './components/searchbar/SearchBar';
//import characters from "./data.js"
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from './components/nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from './components/form/Form.jsx';
import Favorites from "./components/favorites/Favorites.jsx"

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  // creamos un estado donde tengamos el array de personajes
  const[characters, setCharacters] = useState([]);
  
  const [access, setAccess] = useState(false);
  const username = 'yilzam228@gmail.com';
  const password = '1password';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }else{
      alert("usuario o contraseña invalida");
    }
  }

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

  useEffect(() => {
    !access && navigate('/');
}, [access]);

  const logout =()=>{
    setAccess(false);
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
        <div>
          {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} /> }
        </div>
        <Routes>
          <Route path="/"  element={<Form login={login} />} />
          <Route 
            path="/home" 
            element={<Cards characters={characters} 
            onClose={onClose}/>} 
          />
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:detailId" element={<Detail/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
    </div>
  )
}

export default App
