import SearchBar from "./SearchBar";
import style from "./Nav.module.css";
import imagenLogo from '../../imagenes/logo.png'
import ROUTE from "../../Helpers/Routes.helper";
import { NavLink, useLocation } from "react-router-dom";


export default function Nav(props){
console.log(props.user)

    const location = useLocation()
    
    return(
        <div>
        <nav className={style.container}>
            <div className={style.containerNavButton}>
         {location.pathname !== ROUTE.ABOUT ? <button className={style.styleNavButton}><NavLink className={style.containerNavWords} to="/About">
            <p>About</p>
            </NavLink>
            </button> : <button className={style.styleNavButtonDisabled} disabled={true}>
            <p className={style.containerNavWords}>About</p>
            </button>}
            {location.pathname !== ROUTE.HOME ? <button className={style.styleNavButton}><NavLink className={style.containerNavWords} to="/Home">
            <p>Home</p>
            </NavLink></button> : <button className={style.styleNavButtonDisabled} disabled={true} >
            <p className={style.containerNavWords}>Home</p>
            </button>}
           {location.pathname !== ROUTE.FAVORITES ? <button className={style.styleNavButton}><NavLink className={style.containerNavWords} to="/Favorites">
            <p>Favorites</p>
            </NavLink></button> : <button className={style.styleNavButtonDisabled} disabled={true} >
            <p className={style.containerNavWords}>Favorites</p>
            </button>}  
           
            </div>
           
<div className={style.containerLogo}>
                <img  className={style.imgLogo} src={imagenLogo}/>
                </div>
                
        {location.pathname === ROUTE.HOME ? <SearchBar onSearch={props.onSearch} random={props.random}/> : null}
        <p className={style.contUserEmail}>Current Accout: <p>{props.user.username}</p> </p>
        <button  className={style.styleNavButtonLogOut} onClick={() => props.logOut()}>LogOut</button> 
        </nav> 
        </div>
    )
}