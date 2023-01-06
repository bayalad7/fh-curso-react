import { useState } from "react"; // Importamos el Hook - useState
import PropTypes from "prop-types"

const Counter = ({ value }) => {

    /**
     * NOTA IMPORTANTE
     * Cuando cambia el estado del componente en React, el componente se vuelve a renderizar,
     * en este caso cuando se ejecuta la función handleAdd, handleSubtract o handleReset
     * veremos como se ejecuta el console.log("render") en la consola del navegador...
     * 
     * Y si nosotros tuvieramos alguna petición asíncrona, una petición a una API, un Fetch, Etc..
     * Cada vez que cambiemos el estado de algún Hook, estas peticiones se volverían a ejecutar en el componente
     * ya que se esta renderizando nuevamente.
     * 
     * Existen Hooks especializados para controlar eso, pero en este caso tenemos que tener presente que si cambiamos
     * el estado del Hook, se va a volver a disparar el componente.
     */
    console.log("render")
    // PETICIÓN ASÍNCRONA AQUÍ - API - FETCH - ETC...

    // Desestructuramos el Hook useState
    /**
     * Notas del Hook useState
     * 1.- Cuando trabajamos con el useState necesitamos mandar cual va a ser
     *     ese valor inicial de ese estado: ( value ).
     * 
     * 2.- Al realizar la desestructuración del retorno de la función useState,
     *     - El primer valor "counter" durante la representación inicial del estado devuelto ()
     *       es el mismo que el valor pasado como primer argumento ()
     *     - El segundo valor "setCounter" será una función que usaremos para actualizar
     *       el valor y estado de "counter".
     * 
     * 3.- Cuando mandamos a llamar setCounter, le decimos a React, oye el estado cambio.
     *     Por consecuencia tienes que volver a ejecutar la renderización del componente.
     */
    const [ counter , setCounter ] = useState( value )

    const handleAdd = () => {
        // Forma 1 de incrementar el valor
        setCounter( counter + value )
        // Forma 2 de incrementar el valor, utilizar un nombre de una variable internamente...
        // setCounter( (c) => c + value )
    }

    const handleSubtract = () => setCounter( counter - value )
    const handleReset = () => setCounter( value )

    return (
        <>
            <h1>App Counter: { counter }</h1>
            <button onClick={ handleAdd } >¡Click +{value}!</button>
            <button onClick={ handleSubtract } >¡Click -{value}!</button>
            <button onClick={ handleReset } >¡Reset!</button>
        </>
    );
}

Counter.defaultProps = {
    value: 0,
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
}

export default Counter;