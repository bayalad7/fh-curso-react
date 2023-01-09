import {describe, expect, test} from '@jest/globals';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr'

describe('Pruebas en 07-deses-arr', () => {
    test('retornaArreglo debe de retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo();
        expect( letras ).toBe( "ABC" );
        // Jest también se encarga de evaluar si existe alguna diferencia entre los tipos de datos
        // expect( numeros ).toBe( "123" ); // Esto dará un error
        expect( numeros ).toBe( 123 ); // Esto no dará un error
        console.log( typeof letras, typeof numeros );
        expect( typeof letras ).toBe( "string" ); // Validando el tipo de dato de la variable
        expect( typeof numeros ).toBe( "number" ); // Validando el tipo de dato de la variable
        expect( letras ).toStrictEqual( expect.any( String ) ); // Validando el tipo de dato de la variable
    })
})
