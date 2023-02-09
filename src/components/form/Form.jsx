import React from "react";
import Form from "./Form.module.css";
import { validation } from "./Validation";
import { useEffect } from "react";


export default function Form(){

    const [userData, setUserData] = React.useState({ 
        username: '', 
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
        
        setErrors(validation({...userData,[e.target.name]:e.target.value}))
    };

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    function handleSubmit (e){
        e.preventDefault();

    }

        return(
            <div>
                <Form>
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
                </Form>
            </div>
    );
}