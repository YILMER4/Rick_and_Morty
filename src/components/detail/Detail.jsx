import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Detail() {

    const {detailId}= useParams();
    const navigate = useNavigate();

    const [character, setCharacter]= useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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

    const handleClick = ()=> {
        navigate("/home")
    };
    
        return(
            <div>
                {character ?(
                <div>
                    <div>
                        <h1>{character.name}</h1>
                        <h5>{character.status}</h5>
                        <h5>{character.species}</h5>
                        <h5>{character.gender}</h5>
                        <h5>{character.origin?.name}</h5>   
                    </div>
                    <div>
                        <img  src={character.image} alt={character.name} /> 
                    </div>
                </div>
            ): (
            ""
            )}    
            <button onClick={handleClick}> Volver </button>
            </div>
        );
    }