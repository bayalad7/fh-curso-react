// Operador condicional ternario
// Manera tradicional
const activo = true;
let mensaje1 = "";
if( activo )
{
    mensaje1 = "Activo";
}
else
{
    mensaje1 = "Inactivo";
}

// Manera moderna (operador ternario)
const mensaje2 = ( activo ) ? "Activo" : "Inactivo";

// Manera moderna (operador ternario sin el [else])
const mensaje3 =  activo && 'Activo'; // Regresa "Activo"
const mensaje4 = !activo && 'Activo'; // Regresa false

console.log( mensaje1 );
console.log( mensaje2 );
console.log( mensaje3 );
console.log( mensaje4 );
