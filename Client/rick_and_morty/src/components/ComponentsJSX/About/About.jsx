import style from './About.module.css'
import imagen from "./yo.jpeg"

export default function About(){
   return( 
   <div className={style.container}>
    <h1 className={style.containerWords}>Esto es una aplicacion integradora sobre "Rick and Morty"</h1>
    <h2 className={style.containerWords}>Realizada por Marcos Ramirez</h2>
    <img className={style.containerImage} src={imagen} alt='god'/>
    </div>
    )
};