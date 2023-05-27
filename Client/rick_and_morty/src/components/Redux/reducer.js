import { ADD_FAVORITE, DELETE_FAVORITE, LOGIN } from "./actionsTypes";

const initialState = {
 myFavorites: []
}

const reducer = (state = initialState, {type, payload}) =>{
    switch (type){
        case ADD_FAVORITE:
         return { ...state, myFavorites: payload, allCharacters: payload };

         case DELETE_FAVORITE:
            return { ...state, myFavorites: payload };
        default:
            return {...state}

    }
}

export default reducer;