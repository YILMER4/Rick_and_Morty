import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./actions-types";

const initialState ={// estado global
    myFavorites: [],
    allCharacters: [],
};


// el reducer es el unico que manipula el estado global 
// reducer siempre retorna un estado nuevo
// el payload de cada caso tiene informaicon distinta

const rootReducer= (state=initialState, {type, payload})=>{// {type, payload}=action
    switch (type) { //switch (type)= switch (action.type)
        case ADD_CHARACTER:
        // [...state.list];//se usa para no modificar el estado original para no pisarlo
            return{
                ...state,// se usa por si el estado global tiene mas de un elemento no se pierdan
                myFavorites:[...state.myFavorites, payload] // este payload es el personaje que se va estar agregando
            };//action.payload
        case DELETE_CHARACTER:
            // se crea constante para nuevo array
            //filtramos que por cada elemento que tiene en su propiedad en su id
            // solamente me van a quedar guardados en esta constante los que sean 
            // diferentes al payload
            const favoriteFiltered=  state.myFavorites.filter
            ( e =>e.id !== payload) // en el payload estamos trayendo un id
            return{
                ...state,
                myFavorites: favoriteFiltered,
                // la manera tradicional es no hacer variable y pegar aca directamente
                // este codigo state.myFavorites.filter( e =>e.id !== payload)
            }
        case FILTER:
            return{

            }
        case ORDER:
            return{
            }    
        default:
            return {...state};
    }

}

export default rootReducer;