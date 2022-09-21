// La desestructuración de arreglos es mucho más fácil que la desestructuración de objetos y funcionan casi igual, solamente hay una diferencia entre ellos y es que en la desestructuración de los arreglos, la posición es muy importante, eso es toda la diferencia.
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [Goku, Vegeta, Trunks] = personajes;
console.log( Goku, Vegeta, Trunks );


// Extracción de un solo personaje
const [ , , soloTrunks] = personajes;
console.log( soloTrunks );


// Extracción de un personaje que no existe en el arreglo
const [ , , , Krilin = "No tiene valor" ] = personajes;
console.log( Krilin ); // No tiene valor


// Desestructuración del arreglo con el retorno del mismo en la función
const informacionPersona = () =>{
    return ["Benjamín", "Ayala"]
}
//const [nombre, apellido] = informacionPersona();
//console.log(nombre, apellido) // Benjamín Ayala


// Desestructuración del arreglo desde los argumentos de la función.
const informacionPersona2 = ([nombre, apellido]) => [nombre, apellido]
const [nombre2, apellido2] = informacionPersona2(["Benjamín", "Ayala"]);
console.log(nombre2, apellido2) // Benjamín Ayala

const usarEstado = ( valor ) => {
    return [ valor , ()=>{ console.log("Hola mundo") } ];
}

const Gohan = usarEstado( "Gohan" )
console.log( Gohan[0] );
Gohan[1]();

const [nombre, setNombre] = usarEstado( "Gohan" )
console.log( nombre );
setNombre();