// GIPHY - Fetch API
// https://developers.giphy.com/docs/api/endpoint#random
const apiKey = "Q02k4HZ9WGQ1wzw6uEzxgzn5tIRrHaZV";
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch( apiUrl );

peticion.then( (respuesta) => respuesta.json() ) // Serializamos la respuesta en formato json
        .then( ({data}) => {
            console.log( data )
            const { url } = data.images.original;
            const img = document.createElement("img");
            img.src = url;
            document.body.append(img);
        })
        .catch( console.log );
