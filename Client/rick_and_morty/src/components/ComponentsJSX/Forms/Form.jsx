import React,{ useState} from "react";
import validate from "../../Helpers/Validation";
import style from "./Form.module.css"

function Form({login}){
    const [form, setform] = useState({
        username:'',
        password: ''
})
const [errors, setError] = useState({
    username:'',
    password: '',
});

const onHandleChange = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    
    setform({...form, [property]: value})
   setError(validate, {...form, [property]: value});
};

const submitHandler = (event) =>{
    event.preventDefault()
    if(Object.values(errors).length === 0) {
        login(form);
        setform(form);
        setError(errors);
        alert("Succes login")
    }
    else{
        alert("You must complete all the form")
    }
    
};
    return(
        <div className={style.container}>
        <form onSubmit={submitHandler}>
        <div>
            <div className={style.containerWords}>
            <h3 className={style.wordsStyle}>Welcome to Rick and Morty Card App</h3>
            <h4 className={style.wordsStyle2}>Please enter an User Name and Pass Word</h4>
            </div>
            <label htmlFor="">User Name:</label>
                <input
                name="username"
                placeholder="User Name" 
                type="text"
                value={form.username}
                onChange={onHandleChange}
                className={style.loginBarContainer}
                 />
                 {errors.username && <p className={style.danger}>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="">PassWord:</label>
                <input
                name="password"
                placeholder="Password" 
                type="text"
                value={form.password}
                onChange={onHandleChange}
                className={style.loginBarContainer}
                 />
                 {errors.password && <p className={style.danger}>{errors.password}</p>}
        </div>
        <button className={style.buttonStyle} type="submit">Login</button>
        </form>
        </div>
    )

}
 export default Form