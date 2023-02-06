
import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css"

export default  function Nav (props){

    return(
        <> 
        <img src="../../assets/R-y-M_04.png" />
        <SearchBar
            onSearch={props.onSearch}
        />
        </>
    );
}

 //<img src="../../assets/R-y-M_04.png" />