
/*
// Opción larga
const obtenerImagen = () => {
    const promesa = new Promise((resolve, reject) =>{
        resolve('https://google.com')
    })
    return promesa;
}
*/

// Opción abreviada
const obtenerImagen = () => new Promise( resolve => resolve('https://www.google.com'));
obtenerImagen().then( console.log );

const obtenerImagen2 = async () => 'https://www.google.com';
console.log( obtenerImagen2() );
obtenerImagen2().then( console.log );


// Async - Await - Fetch
const obtenerImagenAsyncAwait = async () => {
    try {
        const apiKey = "Q02k4HZ9WGQ1wzw6uEzxgzn5tIRrHaZV";
        const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
        const apiRespuesta = await fetch( apiUrl );
        // Esta línea de comentario no se ejecuta hasta que se termine de ejecutar el await que esta en el fetch
        const { data } = await apiRespuesta.json();
        // Esta línea de comentario no se ejecuta hasta que se termine de ejecutar el await que esta en el apiRespuesta.json()
        const { url } = data.images.original;
        return url;        
    } catch (error) {
        // Manejo del error...
        console.error( error );
    }
}
obtenerImagenAsyncAwait().then( imgUrl => {
    const img     = document.createElement("img");
          img.src = imgUrl;
    document.body.append(img);
})
