import styles from "./SearchBar.module.css"
import { useState } from "react";

// aca se escribe los styled components si no uso el module.css


export default function SearchBar(props) {

   const {onSearch}=props;
   const [character, setCharacter]= useState("");

   const handleSearch = (e)=>{
      let {value}= e.target;
      setCharacter(value);
   };

   return (
      <div>
         <input type='search' onChange={handleSearch} />
         <button 
         className={styles.container} 
         onClick={()=>props.onSearch(character)}
         >
         Agregar
         </button>
      </div>
   );
}

// minuto 20 code review 10a  react estados 
