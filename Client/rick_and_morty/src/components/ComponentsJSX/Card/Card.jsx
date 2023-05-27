import style from './Card.module.css'
import { Link, } from 'react-router-dom';
import ROUTE from '../../Helpers/Routes.helper';
import { addFavorite, deleteFavorite } from '../../Redux/actions';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"



function Card({id, image, name, species, gender, onClose, deleteFavorite, addFavorite, myFavorites}) {
   
   const [isfav, setFav] = useState(false)

   const handleFavorite = () =>{
      if(isfav){
         setFav(false)
         deleteFavorite(id)
      }
      else{
         setFav(true)
         addFavorite({id, name, image, species, gender})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {isfav? null : (<button className={style.containerBoton} onClick={onClose}>X</button>)}
         <img className={style.imagen} src={image} alt="god" />
         {
         isfav ? (
             <button className={style.containerBoton}  onClick={handleFavorite}>❤️</button>
          ) : (
             <button  className={style.containerBoton}  onClick={handleFavorite}>🤍</button>
          )
        }
         <Link to={`${ROUTE.DETAIL}/${id}`} >
  <h5 className={style.containerName}>{name}</h5>
</Link>
<h2 className={style.containerWords}>Id: {id}</h2>
         <h2 className={style.containerWords}>Species: {species}</h2>
         <h2 className={style.containerWords}>Gender: {gender}</h2>
          
      </div>
   );
}

const mapStateToProps = (state) =>{
return{
   myFavorites: state.myFavorites
}
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFavorite: (character) =>{
dispatch(addFavorite(character))
      },
      deleteFavorite: (id) =>{
         dispatch(deleteFavorite(id))
      }
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
