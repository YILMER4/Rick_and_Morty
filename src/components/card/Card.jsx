// usamos los estilos de css
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"; //reemplazaria  mapDispatchToProps mediante este hooks
import { useState, useEffect } from "react";
import { addCharacter, deleteCharacter } from "../../redux/actions";

export default function Card(props) {
   // constante para despachar el seteado deñ handleFavorites
   const dispatch= useDispatch();
   // useselector nos trae directamente el estado global
   const myFavorites= useSelector(state =>state.myfavorites);
   //estado local
   const[isFav, setIsFav]=useState(false)

   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false);
         dispatch(deleteCharacter(props.id));
      }else{
         setIsFav(true);
         dispatch(addCharacter(props))
      }
   }

   // useEffect(() => {
   //    props.myFavorites.forEach((fav) => {
   //       if (fav.id === props.id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [props.myFavorites]);

   return (
      <div className={styles.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={props.onClose}>X</button>
         <h6>{props.id}</h6>
         <Link to={`/detail/${props.id}`}>
            <h2 >{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}

// export function mapDispatchToProps(dispatch) {
//    return{
      
//    }
//}