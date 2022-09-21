const nombre = "Benjamín";
const apellido = "Ayala";

const nombreCompleto1 = nombre + " " + apellido; // Concatenación sencilla
const nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`; // Concatenación con template string

console.log({nombreCompleto1});
console.log({nombreCompleto2});
console.log(`${nombre}
-------------------------
${apellido.toUpperCase()}
---------------------------
`);

// Operaciones utilizando template string
console.log(`Resultado de la suma: ${3+4}`);

// Funciones utilizando template string
const saludar = (nombre) => `Hola ${nombre}`;
console.log(`Este es un mensaje de Juan: ${saludar("Benjamín")}`);