// Desestructuración o asignación desestructurante
// La desestructuración de los objetos sirve para obtener cierta información específica que uno requiere o necesita y así evitar traer toda la información de un objeto.
const persona = {
    id: 1,
    nombres: "Benjamín",
    apellido: "Ayala",
    edad: 30,
    apodo: "Benyi",
    domicilio: {
        colonia: "San Pedrito",
        calle: "Sector 7 #570",
        cp: 28219,
        municipio: "Manzanillo",
        estado: "Colima",
        pais: "México",
    }
}



// Desestructuración usando la navegación del objeto
// console.log(persona.nombres); // Benjamín
// console.log(persona.apellido); // Ayala
// console.log(persona.edad); // 30
// console.log(persona.apodo); // Benyi



// Desestructuración de información del objeto
const { nombres, apellido, edad, apodo, altura, peso = 'Sin peso' } = persona;
// console.log( nombres ) // Benjamín
// console.log( apellido ) // Ayala
// console.log( edad ) // 30
// console.log( apodo ) // Benyi
// console.log( altura ) // undefined
// console.log( peso ) // Sin peso



// Desestructuración de información del objeto en los parámetros de la función
const retornaPersona = ({ id, nombres, apellido, edad, apodo}) => {
    console.log( id, nombres, apellido, edad, apodo );
}
retornaPersona( persona );



// Desestructuración con función
const usarContexto = ({ id, nombres, apellido, edad, apodo, domicilio}) => {
    return {
        claveId: id,
        nombreCompleto: `${nombres} ${apellido}`,
        domicilioCompleto: `${domicilio.colonia} ${domicilio.calle} C.P. ${domicilio.cp}, ${domicilio.municipio}, ${domicilio.estado}, ${domicilio.pais}.`,
    }
}
const benjamin = usarContexto( persona );
const {claveId, nombreCompleto, domicilioCompleto} = usarContexto( persona );
console.log( benjamin )
console.log( claveId, nombreCompleto , domicilioCompleto )



// Desestructuración de un objeto anidado
// Opción 1 (la menos común)
    // const { domicilio:{colonia, calle, cp, municipio, estado, pais} } = persona;
    // console.log( colonia, calle, cp, municipio, estado, pais )

// Opción 2 (la más común)
    const { domicilio } = persona;
    const { colonia, calle, cp, municipio, estado, pais } = domicilio;
console.log( colonia, calle, cp, municipio, estado, pais )



// Busqueda y desestructuración de información del objeto devuelto
const heroes = [{
    id: 1,
    nombre: "Batman",
    edad: 40,
},{
    id: 2,
    nombre: "Superman",
    edad: 40,
},{
    id: 3,
    nombre: "Spiderman",
    edad: 40,
},{
    id: 4,
    nombre: "Ironman",
    edad: 40,
},{
    id: 5,
    nombre: "Dr Strange",
    edad: 40,
}];

const {nombre, id} = heroes.find( (heroe) => heroe.id === 1 );
console.log(id); // 1
console.log(nombre); // Batman