// requerimos libreria axios
const axios = require("axios");

//construimos controlador 
const getCharDetail =(res, id)=>{
     //hacemos peticion pimer estado pendiente
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>response.data)
    .then((data)=>{
        const character ={
            id:data.id,
            image: data.image, 
            name: data.name, 
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species
        }
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch((error)=>{ // si hay un error lo obteneos y damos respuesta
        res.writeHead(500, {"Content-type":"text/plain"})
        res.end(error.message)
    })
}

module.exports={
    getCharDetail
}