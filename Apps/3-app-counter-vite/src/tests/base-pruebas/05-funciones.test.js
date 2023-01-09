import {describe, expect, test} from '@jest/globals';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Pruebas con toEqual/toStrictEqual en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        console.log( user, testUser );
        /**
         * Nota
         * Si queremos realizar una prueba de comparación de 2 objetos
         * en vez de utilizar el toBe, debemos usar el toEqual o toStrictEqual.
         * Esto es porque en JavaScript en las propiedades de los objetos
         * aunque los 2 objetos tengas las propiedades iguales,
         * estos están apuntado a valores de memoria diferentes. A diferencia
         * de los tipos primitivos que se compara su valor directamente, pero
         * en los objetos se comparan en base a su ubicación de memoria...
         */
        // expect( testUser ).toBe( user );}
        expect( testUser ).toEqual( user );
        expect( testUser ).toStrictEqual( user );
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = "Benjamín";
        const user = getUsuarioActivo( name );
        expect( user.username ).toEqual( name );
        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    })
})
