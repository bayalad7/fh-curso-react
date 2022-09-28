// Importación de las funciones de los heroes
import {obtenerHeroePorID} from './../data/heroes-funciones';

// Promesas
// El cuerpo de la promesa se ejecuta de inmediato
// La respuesta de la promesa se ejecuta al final una vez que el navegador termino de leer todo el script
// ya que la resolución de las promesas las va a colocar en una pila de callbacks

console.log("Inicio del script");

const promesa = new Promise( (resolve, reject) => {
	console.log("Cuerpo de la promesa");
	const exito = true;
	if( exito )
		resolve({estado:"Ok",   mensaje: "Promesa resuelta correctamente"});
	else
		reject({estado:"Error", mensaje: "Promesa resuelta con error"});
});

promesa.then(  console.log )  // Respuesta ok    de la promesa {estado: 'Ok',    mensaje: 'Promesa resuelta correctamente'}
       .catch( console.log )  // Respuesta error de la promesa {estado: 'Error', mensaje: 'Promesa resuelta con error'}
       .finally( () => { console.log("finally")} ) // finally se ejecuta después de que la promesa ejecuto el then o el catch

console.log("Fin del script");


const obtenerHeroPorIdAsincrono = ( id ) => new Promise( (resolve, reject) => {
	setTimeout(() => {
		const heroe = obtenerHeroePorID( id );
		if( heroe )
			resolve( heroe )
		else
			reject("El héroe no existe");
	}, 1000);
});

obtenerHeroPorIdAsincrono( 3 )
.then( ( heroe ) => {
	console.log( `El héroe es: ${heroe.nombre}` );
})
.catch( console.log )