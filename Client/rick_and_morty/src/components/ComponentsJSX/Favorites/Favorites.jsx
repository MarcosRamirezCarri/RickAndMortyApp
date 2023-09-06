import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites, filterCards, orderCards } from "../../Redux/actions";
import Card from "../Card/Card";
import portalGif from '../../imagenes/portalGod.gif'
import style from './Favorites.module.css'

const FavList = () =>{

    const dispatch = useDispatch();
    

useEffect(() => {
dispatch(getFavorites())
},[dispatch])

const FavoritesValid = useSelector((state) => state.myFavorites)
const myFavorites = []
if (Array.isArray(FavoritesValid) && FavoritesValid.length > 0) myFavorites.push(...FavoritesValid);
    
const myFavCopyValid = useSelector((state) => state.allCharacters)
    const myFavCopy = []
    if (Array.isArray(myFavCopyValid) && myFavCopyValid.length > 0) myFavCopy.push(...myFavCopyValid);


    const handleGender = (e) =>{
        const val = e.target.value
dispatch(filterCards(val))
    }
    const handleAlphabet = (e) =>{
const val = e.target.value;
dispatch(orderCards(val))
    }
    return(<div>
        { myFavCopy.length === 0 ? null : <div>
            <select className={style.contSelects} onChange={handleGender}>
            <option select disabled>Filter by Gender</option>
<option  value='reset'>Reset all</option>
<option  value='Male'>Male</option>
<option  value='Female'>Female</option>
<option  value='Genderless'>Genderless</option>
<option  value='unknown'>Unknown</option>
            </select>
            <select className={style.contSelects2} onChange={handleAlphabet}>
                <option select disabled>Order alphabetically</option>
                <option value='Asc'>Ascendant</option>
                <option value='desc'>Descendant</option>
            </select>
        </div>
        }
    <div className={style.container}>
       
        {myFavorites.length === 0 ? <div className={style.contianerGif}>
            <img src={portalGif} alt="portal"/>
        </div> : myFavorites.map(
            ({id, 
                image, 
                name, 
                species, 
                gender,
                key 
               }) =>
            (<Card id={id} image={image} name={name} species={species} gender={gender} key={key} />)
            
        )}

    </div>
    </div>
    )
}





export default  FavList