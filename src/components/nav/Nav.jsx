import React from "react";

import SearchBar from "../searchbar/SearchBar.jsx";
//import SearchBar from "../searchbar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default  function Nav (props){

    return(
        <div className={styles.container} >
            <Link to="/about">
                <h6>About</h6>
            </Link >
            <Link to="/home">
                <h6>Home</h6>
            </Link> 
            <SearchBar className={styles.nav}
                onSearch={props.onSearch}
                //posiblemente quitarle el props pero la funcion  recibirian un {onSearch}          
            />
            <Link to="/">
            <button onClick={props.loguot}>Logout</button>
            </Link>
        </div>
    );
}

 //<img src="../../assets/R-y-M_04.png" />