// Un arreglo es una colección de información que se encuentra dentro de una misma variable.
const numeros = [1, 2, 3, 4, 5];
numeros.push(6);

const masNumeros = numeros;
masNumeros.push(7); // Este cambio en masNumeros, afectará también al arreglo de numeros.

const otrosNumeros = [...numeros];
otrosNumeros.push(8); // Este cambio en otrosNumeros, no afectará al arreglo de numeros y masNumeros. gracias al operador REST.

// La función map de un arreglo llama a una función de devolución de llamada definida en cada uno de los elementos de un arreglo y devuelve un arreglo que contiene los resultados.
// En pocas palabras la función map recorre/itera cada uno de los elementos dentro de un arreglo y cambia el valor de los elementos dependiendo lo que se le indique
const multiplicaNumeros = numeros.map( (numero) => numero * 2);
multiplicaNumeros.push(100);

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]
console.log(masNumeros);
console.log(otrosNumeros);
console.log(multiplicaNumeros); // [2, 4, 6, 8, 10, 12, 14, 100]
