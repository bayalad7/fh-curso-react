// Importaciones y exportaciones

// Importación por defecto y de un solo elemento individual.
import heroes, { comics } from './../data/heroes';

// Importaciones de las funciones
import { obtenerHeroePorID, obtenerHeroesPorComic } from './../data/heroes-funciones';

// Importación y exportación por defecto.
console.log( heroes );

// Importación y exportación de un elemento.
const [DC, Marvel] = comics;
console.log( DC, Marvel );

// Importaciones de funciones
// Heroes por Id
console.log( obtenerHeroePorID(1) );
console.log( obtenerHeroePorID(4) );

// Heroes por Comic
console.log( obtenerHeroesPorComic(DC) );
console.log( obtenerHeroesPorComic(Marvel) );

export{
    heroes as default
}
