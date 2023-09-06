import Card from '../Card/Card.jsx';
import style from "./Cards.module.css";
import portalGif from '../../imagenes/portalGod.gif'


export default function Cards(props) {
   const { characters } = props;
   console.log(characters)


 
   return( 
   <div className={style.container}>
      {characters.length === 0 ?  <div className={style.contianerGif}>
         <img src={portalGif} alt=' '/>
      </div >
      : characters.map((a, index) =>
      <Card 
      key={index}
      id={a.id}
      name={a.name}
      species={a.species}
      gender={a.gender}
      status={a.status}
      origin={a.origin}
      image={a.image}
      onClose={() => props.onClose(a.id)}
      />
      )}
   </div>
   )
   
}
