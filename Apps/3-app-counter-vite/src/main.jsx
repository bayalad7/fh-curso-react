import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Notas.
 * 1.- Al empezar la aplicación de React, necesitamos de un componente funcional (functionals components).
 *     Esto es lo que se acostumbra hoy en día al trabajar con React, puros componentes basados en funciones.
 * 2.- Todos los nombres de los componentes funcionales, van capitalizados con Pascal Case o Upper Camel Case.
 */
const App = () => {
    return (<h1>¡Hola Mundo!</h1>);
}

/**
 * Vamos a renderizar nuestra aplicación.
 * La app se tiene que renderizar en un elemento del DOM.
 */
ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)