// Importaciones del elemento heroes y exportaciones de funciones
import heroes from './heroes';
export const obtenerHeroePorID = ( id ) => heroes.find( (heroe) => heroe.id === id );
export const obtenerHeroesPorComic = ( comic ) => heroes.filter( (heroe) => heroe.comic === comic );