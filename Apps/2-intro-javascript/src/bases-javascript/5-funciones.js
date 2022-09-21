// Funciones normales
// Esto es una función normal que puede ser modificada
function saludo(nombre)
{
    console.log(`Hola ${nombre}!`);
}
saludo = true;
// saludo("Pedro"); // Error: saludo no es una función

// Esto es una función segura en una variable constante
const otroSaludo = function(nombre)
{
    console.log(`Hola ${nombre}!`);
}
// otroSaludo = true; // Error: En asignación a variable constante.
otroSaludo("Juan");



// Funciones de flecha
const elSaludo = (nombre) => console.log(`Hola ${nombre}!`);
elSaludo("Mariana");



// Retornos de objetos:
const datosUsuario = () => { 
    return {
        id: 1,
        nombre: "Benjamín",
        apellido: "Ayala",
        usuario: "bayalad7"
    }
};
const otroUsuario = () => ({
    id: 2,
    nombre: "Pedro",
    apellido: "Lee",
    usuario: "pdl1"
});
console.log( datosUsuario() );
console.log( otroUsuario() );



// Buscar en un arreglo de objetos:
const heroes = [{
    id: 1,
    nombre: "Batman"
},{
    id: 2,
    nombre: "Superman"
},{
    id: 3,
    nombre: "Spiderman"
},{
    id: 4,
    nombre: "Ironman"
},{
    id: 5,
    nombre: "Dr Strange"
}];

// Existe heroe.id = 1
const encontro = heroes.some( (heroe) => heroe.id === 1 );
console.log({encontro}); // {encontro: true}

// Buscar heroe.id = 1, si find no encuentra nada retornará undefined
const heroe = heroes.find( (heroe) => heroe.id === 1 );
console.log({heroe}); // heroe: {id: 1, nombre: 'Batman'}



// Desestructuración de un objeto podemos usar las {} en la variable constante e indicar las propiedades que queremos obtener del objeto, sin importar el orden del acomodo de las propiedades.
// Ejemplo:
const {nombre, id} = heroes.find( (heroe) => heroe.id === 1 );
console.log(id); // 1
console.log(nombre); // Batman
