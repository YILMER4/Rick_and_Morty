import { useDispatch} from "react-redux"; 
import { useSelector } from "react-redux"; //reemplazaria  mapDispatchToProps mediante este hooks
import { Link } from "react-router-dom";

const Favorites= ()=>{
    // por destructuring a diferencia que en el componente Card 
    const {myFavorites} = useSelector(state=>state);

    return(
        <div>
            <h2>My Favorites</h2>
            {
                myFavorites?.map((character)=>{
                    return(
                        <div>
                            <button onClick={character.onClose}>X</button>
                            <h6>{character.id}</h6>
                            <Link to={`/detail/${character.id}`}>
                                <h2 >{character.name}</h2>
                            </Link>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                            <img  src={character.image} alt={character.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;