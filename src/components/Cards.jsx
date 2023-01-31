import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return ( 
      <div> 
         {
         characters.map((char) =>(
         <Card
            key={char.name}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={()=> alert
            ("Emulamos que se cierra la card")}
         />
         ))}
      </div>
   );
}
