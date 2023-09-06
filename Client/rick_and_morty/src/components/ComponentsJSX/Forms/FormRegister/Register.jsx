import React,{ useState} from "react";
import axios from "axios";
import validate from '../../../Helpers/Validation'
import Swal from "sweetalert2";
import logo from '../../../imagenes/logo.png'
import style from '../Form.module.css'

function FormRegister({ setRegister, handleChangeRegister }){
    const [form, setform] = useState({
        username:'',
        passWord: ''
})
const [errors, setError] = useState({
    email:'',
    passWord: '',
});





const onHandleChange = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    
    setform({...form, [property]: value})
    setError(
        validate({
          ...form,
          [property]: value,
        })
      );
};

const errorsValue = Object.values(errors)
console.log(errorsValue)

const RegisterHandler = async(form) =>{
    try {
        const { username, passWord } = form;
        const URL = "http://localhost:3001/rickandmorty/login/";
        if( errorsValue.length === 0){
        const { data } = await axios.post(URL + `?email=${username}&passWord=${passWord}`)
        if(data.access === true){
            setError({username:'Email used previously', passWord:'Email used previously'})
            Swal.fire({
                icon: 'error',
                title: 'That user is already registered!',
              })
        }
        if(data.email && data.passWord){
            if(errorsValue.length === 0) {
                setform({
                    username:'',
                passWord: ''});
                setError({
                    email:'',
                    passWord: '',
                });
                setRegister(false)
                Swal.fire({
                    icon: 'success',
                    title: 'Register succesfully!',
                    text: 'Now log in!',
                  })
            } 
        }
    }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Missing information!',
                text: "You must complete all the form"
              })
        }  
        
    } catch (error) {
        console.log(error)
    }
    }
    const onHandleSubmit = async(event) =>{
      event.preventDefault()
    await RegisterHandler(form)
    }


    return(
        <div className={style.container}>
            <img className={style.img} src={logo} alt="logo"/>
        <form onSubmit={onHandleSubmit}>
            
        <div>
          
           
            <div className={style.div_input}>
            <label htmlFor="">Email:</label>
                <input
                name="username"
                placeholder="Register Email" 
                type="text"
                value={form.username}
                onChange={onHandleChange}
                className={style.loginBarContainer}
                 />
                 {errors.email && <p className={style.danger}>{errors.email}</p>}
                 </div>
            </div>
            <div className={style.div_input2}>
                <label htmlFor="">PassWord:</label>
                <input
                name="passWord"
                placeholder="Register password" 
                type="text"
                value={form.passWord}
                onChange={onHandleChange}
                className={style.loginBarContainer}
                 />
                 {errors.password && <p className={style.danger}>{errors.password}</p>}
        </div>
        <div className={style.buttonContainer}>
        <button className={style.buttonStyle} type="submit">Register!</button>
            <button onClick={handleChangeRegister} className={style.buttonStyle}>Go back</button>
            </div>
        </form>
       
        </div>
    )

}
export default FormRegister;