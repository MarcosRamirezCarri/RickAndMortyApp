import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES, ORDER, FILTER } from "./actionsTypes";

const initialState = {
    allCharacters: [],
 myFavorites: []
}

const reducer = (state = initialState, {type, payload}) =>{
    switch (type){
            case GET_FAVORITES:
                return {
                    ...state, myFavorites:payload,
                    allCharacters: payload
                }
        case ADD_FAVORITE:
         return { ...state, myFavorites: payload, allCharacters: payload };

         case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
              };
              case FILTER:
                const { allCharacters } = state;
                const filtered = payload === 'reset' ? allCharacters : allCharacters.filter((char) => char.gender === payload);
                return {
                  ...state,
                  myFavorites: filtered,
                };
              case ORDER:
                const { myFavorites } = state;
                const sorted = payload === 'Asc' ?
                myFavorites.slice().sort(function(a, b) {
                  if(a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
                  if(b.name.toLowerCase() < a.name.toLowerCase()) {return 1}
                  return 0;
                }) : 
                myFavorites.slice().sort(function(a, b) {
                  if(a.name.toLowerCase() > b.name.toLowerCase()) {return -1}
                  if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
                  return 0;
                })
                return {
                  ...state,
                  myFavorites: sorted,
                };
        default:
            return {...state}

    }
}

export default reducer;