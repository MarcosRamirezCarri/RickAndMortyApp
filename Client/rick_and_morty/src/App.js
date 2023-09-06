import './App.css'
import Cards from './components/ComponentsJSX/Cards/Cards.jsx'
import Nav from './components/ComponentsJSX/Nav/Nav.jsx'
import About from './components/ComponentsJSX/About/About.jsx'
import Detail from './components/ComponentsJSX/Detail/Detail.jsx'
import ROUTE from './components/Helpers/Routes.helper'
import Form from './components/ComponentsJSX/Forms/Form.jsx'
import FavList from './components/ComponentsJSX/Favorites/Favorites'
import Swal from 'sweetalert2'
import { useState, useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

function App () {
  const [characters, setCharacters] = useState([]);
  const [ access, setAccess] = useState(false);
  const [ register, setRegister ] = useState(false)
  const [user, setUser] = useState({
    email: '',
    passWord:''

  })
  const location = useLocation();
  const Navigate = useNavigate();

  async function login(userData) {
    try {
      const { username, passWord } = userData;
      
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(URL + `?email=${username}&passWord=${passWord}`);
      console.log("Datos recibidos del servidor:", data); 
  
      if (data.access === true) {
        setUser(userData)
        setAccess(data.access);
        Navigate(ROUTE.HOME);
      } else {

        console.log("Error de inicio de sesión. Datos incorrectos:", userData);
        setAccess(false);
        
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Something is wrong!',
        text: 'Wrong email or password',
        showDenyButton: true,
        confirmButtonText: 'Ok',
        denyButtonText: `Are you registered? Register Now!`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
          setRegister(true)
      }})
      console.log("Error en la función login:", error);
    }
  }
  
  useEffect(() => {
    !access && Navigate(ROUTE.LOGIN);
  }, [access]);
  
   const logOut = () =>{
    setAccess(false)
    setCharacters([])
    Navigate(ROUTE.LOGIN)
   }

  const onSearch = async(id) =>{
    try{
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        const characterExists = characters.some((char) => char.id === data.id);
        if (!characterExists) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'That character is already on the list!',
          })
        }
      }
}
 catch (error){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'That character doesn`t exist!',
  })
  console.log(error)
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

 
  return (
    <div className='App'>
      <div>
        {location.pathname !== ROUTE.LOGIN ? <Nav user={user} random={random} onSearch={onSearch} logOut={logOut}></Nav> :undefined}
        <Routes>
          <Route path={ROUTE.LOGIN} element={<Form setRegister={setRegister} register={register} login ={login}/>}>
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
