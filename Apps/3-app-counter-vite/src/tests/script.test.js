/**
 * Notas del testing de Jest
 * 1.- Para ejecutar pruebas con Jest, debemos crear al menos 1 archivo de testing
 *     y nuestro archivo de testing debe validar al menos 1 prueba utilizando la función de "test()"
 * 2.- El primer argumento de la función test, recibe una descripción de esa prueba.
 * 3.- El segundo argumento de la función test, recibe un callback para programar el código que validaremos.
 */
// Jest Testing
test(
    'Este script de prueba no debe de fallar!', // Título o descripción de la prueba, aquí marcaría si la prueba esta bien o esta mal.
    () => {
        /**
         * ¿Como funciona la prueba de Jest? Si dentro de este bloque de código no se lanza algún error //!
         * Entonces la prueba es considerada que pasa. Pero nosotros no queremos que la prueba se realice y ya,
         * vamos a tener que realizar aserciones.
         */
        if( 0 === 1 )
            throw new Error("No puedo dividir entre 0");
    }
);