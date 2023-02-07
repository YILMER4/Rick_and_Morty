import React from "react";

import SearchBar from "../searchbar/SearchBar";
//import SearchBar from "../searchbar";
import styles from "./Nav.module.css"

export default  function Nav (props){

    return(
        <div> 
        <SearchBar className={styles.nav}
            onSearch={props.onSearch}
            //posiblemente quitarle el props
        />
        </div>
    );
}

 //<img src="../../assets/R-y-M_04.png" />