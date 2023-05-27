import Card from '../Card/Card.jsx';
import style from "./Cards.module.css" 

export default function Cards(props) {
   const { characters } = props;
   console.log(props);
   return( 
   <div className={style.container}>
      {characters.map((a, index) =>
      <Card 
      key={index}
      id={a.id}
      name={a.name}
      species={a.species}
      gender={a.gender}
      image={a.image}
      onClose={() => props.onClose(a.id)}
      />
      )}
   </div>
   )
   
}
