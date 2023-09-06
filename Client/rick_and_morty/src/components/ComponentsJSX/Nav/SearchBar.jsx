import style from "./Nav.module.css"
import { useState } from "react";


export default function SearchBar(props) {
      const [id, setId] = useState("");
      const handleChange = (event) =>{
          setId(event.target.value)
      };
   return (
      <div>
         <p className={style.containerNavWords}> Find a character by their ID</p>
      <div className={style.containerSearchBar}>
        <input className={style.searchBar} type='text' placeholder="Type an id" onChange={handleChange} />
      <button className={style.searchButton} onClick={()=>{props.onSearch(id)}}>Add Character</button> 
      <button className={style.searchButton} onClick={()=> {props.random()}}>Random Character</button>
      </div>
      </div>
   );
}
