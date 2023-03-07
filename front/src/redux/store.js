import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import  ThunkMiddleware  from "redux-thunk";

const composeEnhancer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ||
compose; // esta linea es para conectar con la extension del navegador => REDUX DEVTOOLS


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))// esta linea es para
    //poder hacer peticiones a un server
);

export default store;