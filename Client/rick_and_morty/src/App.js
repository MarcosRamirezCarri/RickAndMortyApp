import './App.css'
import Cards from './components/ComponentsJSX/Cards/Cards.jsx'
import Nav from './components/ComponentsJSX/Nav/Nav.jsx'
import About from './components/ComponentsJSX/About/About.jsx'
import Detail from './components/ComponentsJSX/Detail/Detail.jsx'
import ROUTE from './components/Helpers/Routes.helper'
import Form from './components/ComponentsJSX/Forms/Form.jsx'
import FavList from './components/ComponentsJSX/Favorites/Favorites'
import { useState, useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

function App () {
  const [characters, setCharacters] = useState([]);
  const [ access, setAccess] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

  const onSearch = async(id) =>{
    try{
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if(id === characters.id){
        throw Error('Ese personaje ya ese encuentra en la app!')
      }
          if (data.name) {
            setCharacters((oldChar) => [...oldChar, data]);
          }
}
 catch (error){
  alert('No hay personaje con ese ID!')
 }
}
 const onClose = (characterId) =>{
  setCharacters((chars) =>{
    return chars.filter((char) => char.id !== characterId)
  });
 };
 const random = () =>{
  const index = Math.floor((Math.random() * (826 - 1 + 1)) + 1);
  return onSearch(index)
 }
 const login = async (userData) => {
  try {
    const { username, password } = userData;
    console.log(userData);
    const URL = "http://localhost:3001/rickandmorty/login/";
    const { data } = await axios(
      URL + `?email=${username}&password=${password}`
    );

    const { access } = data;
    setAccess(data.access);
    access && Navigate("/home");
  } catch (error) {
    console.log(error.message);
  }
};

 const logOut = () =>{
  setAccess(false)
  Navigate(ROUTE.LOGIN)
 }
 
console.log(access)
  return (
    <div className='App'>
      <div>
        {location.pathname !== ROUTE.LOGIN ? <Nav random={random} onSearch={onSearch} logOut={logOut}></Nav> :undefined}
        <Routes>
          <Route path={ROUTE.LOGIN} element={<Form login ={login}/>}>
          </Route>
          <Route path={ROUTE.HOME} element={ <Cards
          onClose={onClose}
          characters={characters}
        />
          }>
          </Route>
          <Route path={ROUTE.ABOUT} element={<About/>}>
          </Route>
          <Route path={ROUTE.FAVORITES} element={<FavList/>}>

          </Route>
          <Route path={`${ROUTE.DETAIL}/:detailId`} element={<Detail/>}>
          </Route>
 
        </Routes>
      </div>
    </div>
  )
};

export default App
