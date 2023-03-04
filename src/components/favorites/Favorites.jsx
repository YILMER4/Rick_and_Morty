import { useRef } from "react";
import { useDispatch} from "react-redux"; 
import { useSelector } from "react-redux"; //reemplazaria  mapDispatchToProps mediante este hooks
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites= ()=>{
    // por destructuring a diferencia que en el componente Card 
    const {myFavorites} = useSelector(state=>state);

    const dispatch = useDispatch();

    const filter= useRef(null);
    const order= useRef (null);

    function handleReset(e){
        dispatch({type:"RESET"});
        filter.current.value="";
        order.current.value="";
    }

    return(
        <div>
            <h2>My Favorites</h2>
            <select ref={order} onChange={(e)=>dispatch(orderCards(e.target.value))} >
                {["Ascendente", "Descendente"].map((e,i)=><option value={e} key={i}>{e}</option>)}
            </select>
            <select ref={filter} onChange={(e)=>dispatch(filterCards(e.target.value))} >
                {["Male", "Female","unknown","Genderless"].map((e,i)=><option value={e} key={i}>{e}</option>)}
            </select>
            <button value="reset" onclick={handleReset} >
                Reset
            </button>
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