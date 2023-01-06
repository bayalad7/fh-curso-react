/**
 * Con describe podemos agrupar nuestras pruebas con algún título
 * sobre los que estamos probando...
 */
describe( 'Título para la agrupación de mis pruebas.' , () => {
    
    // Pasos para un Jest Testing
    test( 'Prueba 1' , () => {
        // Paso 1.- Inicialización
        const message1 = "     Hola mundo     ";

        // Paso 2.- Estímulo al sujeto de pruebas
        const message2 = message1.trim();

        // Paso 3.- Observar el comportamiento... esperado
        // https://jestjs.io/docs/expect
        expect( message1 ).toBe( message2 ); // Esperamos que el mensaje1 sea igual que el mensaje2
    });

    test( 'Prueba 2' , () => {
    });

});