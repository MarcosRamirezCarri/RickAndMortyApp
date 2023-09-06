import style from './About.module.css'
import imagen from "../../imagenes/yo2.jpeg"
import gitHub from './gitHub.jpeg' 
import linkedin from './linkedin.jpeg'

export default function About(){
   return( 
   <div className={style.container}>
    <div>
        <h2>Welcome to Rick And Morty Card App!</h2>
        <h3>An integrating project created by Marcos Ramirez</h3>
    </div>
    <h3>About the thematic</h3>
    <div className={style.containerWords}>
        <p>Rick and Morty is an American adult animated television series created by Justin Roiland and Dan Harmon in 2013 for Adult Swim, it also aired on Cartoon Network. The series follows the misadventures of a scientist, Rick Sanchez, and his easily influenced grandson, Morty, who transition between domestic life and space, time, and intergalactic travel.</p>

    </div>
    <h3> About the project</h3>
    <div className={style.containerWords}>
        <p>Integrative project, where we incorporated all the knowledge acquired in the bootcamp as it progressed.</p>
        <p>The technologies used and implemented are JavaScript, ReactJs, PostgreSQL, sequelize, ExpressJs, NodeJs, HTML5, CSS modules and Redux</p>
    </div>
    <h3>About Me</h3>
    <div className={style.containerWords}>

        <p>
        I'm a Full Stack Developer specialized in Javascript and recently graduated from the "Soy Henry" bootcamp

I have a strong passion for web application development and am always looking for something new to learn.
        </p>
    <p>

    I have always been calm and methodical by nature, I like to be in search of new knowledge and solutions for different problems. I can function very well in groups of several people, since I have good communication when I am in a team.

I am willing to take on new projects and continue learning more about this world. All focused on innovative technologies to keep moving forward as a developer!</p>
    </div>
    <div className={style.containerWords}>
        <h3>Contact me!</h3>
         <a target='_blank' href='https://github.com/MarcosRamirezCarri'><img className={style.imagenChuiquita} src={gitHub} alt=' '/></a> <a href='https://www.linkedin.com/in/marcos-nicolas-ramirez-carrivali-b8bb77253/'><img className={style.imagenChuiquita} src={linkedin}/></a>
         <p>My Email: gellollo@outlook.com</p>
    </div>
    
    <img className={style.containerImagen} src={imagen} alt='god'/>
    </div>
    )
};