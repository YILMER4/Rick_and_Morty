import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter]= useState(0);

   const handleSearch = (e)=>{
      let {value}= e.target;
      setCharacter(value);
   };

   return (
      <div>
         <input type='search' onChange={handleSearch} />
         <button onClick={()=>props.onSearch(character)}>
         Agregar
         </button>
      </div>
   );
}
