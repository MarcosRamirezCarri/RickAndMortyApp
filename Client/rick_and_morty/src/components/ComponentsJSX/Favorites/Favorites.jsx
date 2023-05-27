import React from "react";
import { connect } from "react-redux"
import Card from "../Card/Card";

const FavList = ({myFavorites}) =>{
    return(
    <div>
        {myFavorites ? myFavorites.map(
            ({id, 
                image, 
                name, 
                species, 
                gender,
                key 
               }) =>
            (<Card id={id} image={image} name={name} species={species} gender={gender} key={key} />)
            
        ) : <h1>Añade tus personajes favorito!</h1> }

    </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }


}

export default connect(mapStateToProps, null)(FavList)