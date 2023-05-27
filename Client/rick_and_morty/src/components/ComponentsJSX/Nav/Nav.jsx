import SearchBar from "./SearchBar";
import style from "./Nav.module.css";
import ROUTE from "../../Helpers/Routes.helper";
import { NavLink, useLocation } from "react-router-dom";


export default function Nav(props){

    const location = useLocation()
    
    return(
        <nav className={style.container}>
            <div className={style.containerNavButton}>
         {location.pathname !== ROUTE.ABOUT ? <button className={style.styleNavButton}><NavLink className={style.containerNavWords} to="/About">
            <p>About</p>
            </NavLink>
            </button> : null}
            <button className={style.styleNavButton}><NavLink className={style.containerNavWords} to="/Home">
            <p>Home</p>
            </NavLink></button> 
           {location.pathname !== ROUTE.FAVORITES ? <button className={style.styleNavButton}><NavLink className={style.containerNavWords} to="/Favorites">
            <p>Favorites</p>
            </NavLink></button> : null}  
            </div> 

        {location.pathname === ROUTE.HOME ? <SearchBar onSearch={props.onSearch} random={props.random}/> : null}
        <button  className={style.styleNavButtonLogOut} onClick={() => props.logOut()}>LogOut</button> 
        </nav> 
    )
}