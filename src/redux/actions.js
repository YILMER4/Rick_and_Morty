import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./actions-types"
// importamos las actions type

// se crean las action creator

export const addCharacter =(character)=>{
    return{
        type: ADD_CHARACTER,
        payload: character,
    }
} 

export const deleteCharacter =(id)=>{
    return{
        type: DELETE_CHARACTER,
        payload: id,
    }
}

export const filterCards = (status)=>{
    return{
        type: FILTER,
        payload: status,
    }
}

export const orderCards = (id) => {
    return{
        type: ORDER,
        payload: id,
    }
}