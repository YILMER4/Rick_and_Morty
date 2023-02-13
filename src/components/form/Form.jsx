import React from "react";
import styles from "./Form.module.css";
import { Validation } from "./Validation.js";


export default function Form (props){

    const [userData, setUserData] = React.useState({ 
        username: " ", 
        password: '' 
    });

    const [errors, setErrors] = React.useState({ 
        username: '', 
        password: '' 
    });

    function handleInputChange (e){
    //e.target es el elemento que ejecuto el evento
    //name identifica el input y value describe el valor actual
        setUserData({
            ...userData,[e.target.name]:e.target.value});
        
        setErrors(Validation({...userData,[e.target.name]:e.target.value}))
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.login(userData);
    }

        return(
            <div>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username" >Username</label>
                    <input 
                        id="username" 
                        value={userData.username}
                        name="username"
                        placeholder= "Escribe tu usuario..."
                        type="text"
                        onChange={handleInputChange}
                        className={errors.username && "warning"}
                    />
                    <p className="danger">{errors.username}</p>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        value={userData.password}
                        name="password"
                        placeholder= "Escribe tu contraseña..."
                        type="text"
                        onChange={handleInputChange}
                        className={errors.password && "warning"}
                    />
                    <p className="danger">{errors.password}</p>
                    <button type="submit" >LOGIN</button>
                </form>
            </div>
    );
}