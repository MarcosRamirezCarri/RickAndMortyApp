import React,{ useState} from "react";
import FormRegister from './FormRegister/Register'
import validate from "../../Helpers/Validation";
import Swal from "sweetalert2";
import logo from '../../imagenes/logo.png'
import style from "./Form.module.css"

function Form({login , setRegister , register}){
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

const submitHandler = (event) =>{
    event.preventDefault()
    const errorsValue = Object.values(errors)
    console.log(errorsValue)

    if(errorsValue.length === 0) {
        login(form);
        setform(form);
        setError(errors);
        Swal.fire({
            icon: 'success',
            title: 'Logged succesfully!',
            text: 'Have a good experiece!',
          })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Something is wrong!',
            text: 'Wrong email or password',
            showDenyButton: true,
            confirmButtonText: 'Ok',
            denyButtonText: `Are you registered? Register Now!`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
              setRegister(true)
     } else {
        return
     }
     })
    }
    
};

const handleChangeRegister = () =>{
    if( register === false){
        setRegister(true);
        setform({
            username:'',
            passWord: ''
    })
    }
    if(register === true){
        setRegister(false)

    }
}
    return(
    <div className={style.containerOFall}>{ register === false ? 
        <div className={style.container}>
            <img className={style.img} src={logo} alt="logo"/>
         
           
        <form onSubmit={submitHandler}>

        <div>
        

            <div className={style.div_input}>
            <label htmlFor="">Email:</label>
                <input
                name="username"
                placeholder="Login Email" 
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
                placeholder="Login password" 
                type="text"
                value={form.passWord}
                onChange={onHandleChange}
                className={style.loginBarContainer}
                 />
                 {errors.password && <p className={style.danger}>{errors.password}</p>}
        </div >
        <div className={style.buttonContainer}>
        <button className={style.buttonStyle} type="submit">Login</button>
            <button onClick={handleChangeRegister} className={style.buttonStyle}>Register Now!</button>
            </div>
        </form>
        
        </div> : <FormRegister handleChangeRegister={handleChangeRegister} setRegister={setRegister}/>}
       
        </div>
    )

}
 export default Form