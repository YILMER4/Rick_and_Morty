import Card from '../card/Card.jsx'

import styles from "./Cards.module.css";

export default function Cards(props) {
   const { characters } = props;
   return ( 
      <div className={styles.container}> 
         {
         characters.map((char) =>(
         <Card
            key={char.name}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={()=>props.onClose(char.name)}
         />
         ))}
      </div>
   );
}
