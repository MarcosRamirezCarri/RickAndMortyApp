import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES, FILTER, ORDER } from "./actionsTypes";
import axios from "axios";




export const addFavorite = (character) =>{
        const endpoint = `http://localhost:3001/rickandmorty/fav`;
        return async(dispatch) => {
         try{
            console.log(character)

            const { data } = await axios.post(endpoint, character)

            if(!data.length) throw Error('No hay favoritos')

              return dispatch({
                 type: ADD_FAVORITE,
                 payload: data,
              });
         }
         catch(error){
            console.log(error.message)
         }
        };
     };

export const deleteFavorite = (id) =>{
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async(dispatch) => {
      try{
      const { data } = await axios.delete(endpoint);

      console.log(data)

          return dispatch({
             type: DELETE_FAVORITE,
             payload: data,
       });
      }
      catch(error){
         console.log(error.message)
      }
    };
    };

    export const getFavorites = () =>{
      const endpoint = 'http://localhost:3001/rickandmorty/fav'
      return async function (dispatch) {
         try {
            const { data } = await axios.get(endpoint)
            return dispatch({
               type: GET_FAVORITES,
               payload: data
            })
         } catch (error) {
            console.log(error)
         }

      }


    }
    export const filterCards = (gender) => {
      return {
        type: FILTER,
        payload: gender,
      };
    };
    export const orderCards = (id) => {
      return {
        type: ORDER,
        payload: id,
      };
    };
