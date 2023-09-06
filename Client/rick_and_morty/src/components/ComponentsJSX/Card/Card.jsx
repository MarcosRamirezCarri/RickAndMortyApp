import style from './Card.module.css'
import { Link, } from 'react-router-dom';
import ROUTE from '../../Helpers/Routes.helper';
import { addFavorite, deleteFavorite } from '../../Redux/actions';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"



function Card({id, image, name, species, gender, status, origin, onClose}) {

   const dispatch = useDispatch()
   const myAllFavs = useSelector((state) => state.myFavorites)
   const myFavorites = []
   if (Array.isArray(myAllFavs) && myAllFavs.length > 0) myFavorites.push(...myAllFavs);
   const [isfav, setFav] = useState(false)
   useEffect(() => {
      myFavorites.forEach((fav) => { 
        if (fav.id === id) {
         setFav(true);
        }
      });
    }, [ id]); 

   const handleFavorite = () =>{
      if(isfav === true){
         setFav(false)
         dispatch(deleteFavorite(id))
      }
      else {
         setFav(true);
         dispatch(addFavorite({id, image, name, species, gender, status, origin}));
       }
   }
   

   return (
      <div className={style.charactersContainer}>
         
      <div className={style.container}>
         <div className={style.containerBotones}>
         {isfav? null : (<button className={style.botonsyle} onClick={onClose}>X</button>)}
         
         {
         isfav ? (
             <button className={style.botonsyle}  onClick={handleFavorite}>❤️</button>
          ) : (
             <button  className={style.botonsyle}  onClick={handleFavorite}>🤍</button>
          )
        }
        </div>
        <div className={style.containerImagen}>
        <p className={style.containerId}>#{id}</p>
         <img className={style.imagen} src={image} alt="god" />
         </div>
         <div >
         <Link className={style.linkDeco} to={`${ROUTE.DETAIL}/${id}`} > <h5 className={style.containerName} >{name}</h5> </Link>
         </div>
         
       
  <h2 className={style.containerWords}>Species: {species}</h2>
         <h2 className={style.containerWords}>Gender: {gender}</h2>
          
      </div>
      </div>

   );
}



export default Card
