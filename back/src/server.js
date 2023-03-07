// en este componente vamos a crear el servidor para nuestra APP rick and morty

//importamos http
const http = require ("http");
//importamos controlador getCharById
const {getCharById} = require ("./controllers/getCharById");
//importamos controlador getCharDetail
const { getCharDetail } = require("./controllers/getCharDetail");


//creamos servidor
http.createServer((req, res)=>{//el metodo createserver recibe una callback
    //esta linea le permite al front acceder a la API 
    // damos permiso al front para que haga la petición del back 
    res.setHeader('Access-Control-Allow-Origin', '*');
    // at es un metodo que recibe un numero entero y devuelve el elemento de la posicion ingresada
    let id = req.url.split("/").at(-1);

    if(req.url.includes("onsearch")){
        
        getCharById(res, id);
    }
    if(req.url.includes("detail")){
        
        getCharDetail(res, id);
    }
}).listen(3001,"localhost")



///////////////////////////////
// http.createServer((req, res)=>{//el metodo createserver recibe una callback
//     //esta linea le permite al front acceder a la API 
//     // damos permiso al front para que haga la petición del back 
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("rickandmorty/character")){
//         // at es un metodo que recibe un numero entero y devuelve el elemento de la posicion ingresada
//         let id = req.url.split("/").at(-1);

//         let characterFind= characters.find(char=>char.id===id)
        
//         res.writeHead(200, {"Content-type": "application/json"})
//         res.end(JSON.stringify(characterFind));
//     }

// }).listen(3001,"localhost")