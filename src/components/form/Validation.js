

const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

//lo llamamos inputs pero como es un parametro se puede llamar de cualquier forma userData por ejemplo
export function Validation(inputs){
    let errors ={};

        if(!regexUsername.test(inputs.username)){
            errors.username = 'Debe ser un correo electrónico';}
            else if(!inputs.username){
                errors.username = 'Se requiere un nombre de usuario';}
            else if(!inputs.username.length > 35){
            errors.username = 'el nombre de usuario debe tener menos de 35 caracteres';}
        if(!regexPassword.test(inputs.password)){
            errors.password="La contraseña debe terner almenos un número"}
            else if(inputs.password.length < 6 && inputs.password.length >10){
            errors.password = 'la contraseña debe tener entre 6 y 10 caracteres';}
    

    return errors;
}