// para hacer peticion requerimos axios
const axios = require("axios");

// construimos controlador
const getCharById = (res, id)=>{
    //hacemos peticion pimer estado pendiente
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>response.data)
    .then((data)=>{
        const character ={
            image: data.image, 
            name: data.name, 
            gender: data.gender,
            species: data.species
        }
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch((error)=>{
        res.writeHead(500, {"Content-type":"text/plain"})
        res.end(error.message)
    })
}

module.exports ={
    getCharById
}