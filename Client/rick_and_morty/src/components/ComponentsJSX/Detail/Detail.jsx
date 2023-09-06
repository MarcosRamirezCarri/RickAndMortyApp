import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from 'sweetalert2'
import { getFavorites, addFavorite, deleteFavorite } from "../../Redux/actions";
import style from "./Detail.module.css";
import portalGif from '../../imagenes/portalGod.gif'

function Detail () {
  const { detailId } = useParams();
  const [character, setCharacter] = useState([]);
  const dispatch = useDispatch()
  const [fav, setFav] = useState(false)
  console.log(fav)


  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  
  useEffect(() => {
    dispatch(getFavorites())
  },[dispatch])

  const myAllFavs = useSelector((state) => state.myFavorites)
  const favoritos = []
  if (Array.isArray(myAllFavs) && myAllFavs.length > 0) favoritos.push(...myAllFavs);

  useEffect(() => {
    favoritos.forEach((fav) => { 
      if (fav.id === character.id) {
       setFav(true);
       console.log('es favorito')
      }
    });
  }, [character.id]);

  const handleFavorite = () =>{
    if(fav === true){
       setFav(false)
       dispatch(deleteFavorite(character.id))
       swal.fire({
        icon: 'success',
        title: 'Removed succesfully!',
      })
      
    }
    if(fav === false) {
       setFav(true);
       dispatch(addFavorite(character));
       swal.fire({
        icon: 'success',
        title: 'Added succesfully!',
      })
     }
 }
  return(
    
    <div className={style.container}>
      { !character.image ? <div className={style.loaderGif}>
        <img src={portalGif} alt=" "/>
      </div> : <div className={style.container}>
     <div className={style.containercuadr}>
      <p>The details of...</p>
     <img className={style.containerImg} src={character.image} alt="god"/>
      <h2 className={style.containerNameDetail}>{character.name}</h2>
     </div>

     <div className={style.containercuadrDetail} >
      <h2>Their Species is</h2>
     <h3 className={style.containerWordsDetail}>{character.species}</h3>

     <h2>Their Gender is</h2>
      <h3 className={style.containerWordsDetail}> {character.gender}</h3>
     </div>
      <div className={style.containercuadrDetail}>
        <h2>Their Status is</h2>
      {character.status === 'Dead' ? <h3 className={style.containerWordsDetailDead} >{character.status}</h3> : character.status === 'Alive' ? <h3 className={style.containerWordsDetail} >{character.status}</h3> : <h3 className={style.containerWordsDetailUnknown} >{character.status}</h3> }
    
    <h2>Their Origin is</h2>
    <h3 className={style.containerWordsDetail}> {character.origin}</h3>
      </div>
     <div className={style.containerCuadrFavorite}>
      {
         fav === true ? (<div>
             <h2>This Character is already on your favorites list</h2>
              <h3>Do you want to remove it from the it?</h3>
             <button className={style.botonStyles}  onClick={handleFavorite}>Remove</button>
         </div>
          ) : (
            <div>
             <h2>Did you like this character? </h2>
          <h3> Add it to your favorites!</h3>
<button  className={style.botonStyles}  onClick={handleFavorite}>Add</button>
            </div>
             
          )
        }
     </div>
      </div>
      }
  </div>
  )

}
export default  Detail
