import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

function Detail () {
  const { detailId } = useParams()
  const [character, setCharacter] = useState([]);

  const mapStateToProps = (state) =>{
    return{
      myFavorites: state.myFavorites
   }
  }

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
  console.log(character)
  return(
    <div className={style.container}>
      <section>
      <img className={style.containerImg} src={character.image} alt="god"/>
      <h2 className={style.containerNameDetail}>Name: {character.name}</h2>
      <h2 className={style.containerWordsDetail} >Status: {character.status}</h2>
      <h2 className={style.containerWordsDetail}>Species: {character.species}</h2>
      <h2 className={style.containerWordsDetail}>Gender: {character.gender}</h2>
      <h2 className={style.containerWordsDetail}>Origin: {character.origin?.name}</h2>
      </section>
  </div>
  )

}
export default  Detail
