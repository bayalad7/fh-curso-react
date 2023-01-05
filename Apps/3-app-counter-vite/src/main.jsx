import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app"; // Importamos el componente funcional.

import './css/custom.css'

/**
 * Notas.
 * 1.- Al empezar la aplicación de React, necesitamos de un componente funcional (functionals components).
 *     Esto es lo que se acostumbra hoy en día al trabajar con React, puros componentes basados en funciones.
 * 
 * 2.- Todos los nombres de los componentes funcionales, van capitalizados con Pascal Case o Upper Camel Case.
 * 
 * 3.- Nota Importante.
 *     Al crear aplicaciones con React, usualmente nosotros no vamos a estar creando componentes funcionales
 *     directamente en el archivo "main.jsx" donde se renderiza nuestra aplicación, estos componentes funcionales
 *     tienen que ser creados en archivos independientes.
 */


/**
 * Vamos a renderizar nuestra aplicación.
 * La app se tiene que renderizar en un elemento del DOM.
 */
ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        <App titulo="El título, desde los props!"
             subtitulo="Soy el subtítulo"
             valor1={10}
             valor2={23} />
    </React.StrictMode>
)