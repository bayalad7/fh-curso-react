import PropTypes from "prop-types"
import { Saludo } from "./components/saludo"
import { Despido, Despido2 , Despido3 } from "./components/despido"
import Contador from "./components/contador"

const App = ({ titulo, subtitulo, valor1, valor2 }) => {
    
    /**
     * Notas de los props.
     * 1.- Al recibir los props en los componentes, se reciben como un objeto,
     *     este objeto puede tener mucha información dependiente el contexto
     * 
     * 2.- Así como se reciben los props, nos permite establecer un canal de comunicación
     *     entre el componente que recibe los props con su componente padre de la aplicación.
     *     En este caso el componente padre sería <React.StrictMode>
     * 
     * 3.- (props) = es información que fluye desde el componente padre hacia el componente hijo.
     * 
     * 4.- Es muy raro ver que los componentes reciban sus props sin realizar la desestructuración, ejemplo:
     *     No desestructuración: const App = ( props ) - console.log( props );
     *     Si desestructuración: const App = ( {titulo} )
     * 
     * 5.- ¿Como se hace para mandar los props desde el componente padre hacia el hijo?
     *     Al agregar el componente hijo en el componente padre,
     *     se deben agregar las propiedades de la siguiente manera, ejemplo:
     *     
     *      <React.StrictMode>
     *         <App titulo="Hola, desde los props!" />
     *      </React.StrictMode>
     */

    const Nombre = "Benjamín Ayala";
    return (
        <div>
            <h1>
                ¡Hola Mundo! Desde nuestro primer componente.
            </h1>
            <p>Esto es el valor del título desde los props: { titulo } { subtitulo }</p>
            <p>La suma de { valor1 } y { valor2 } es: { valor1 + valor2 }</p>
            { Saludo(Nombre) } y { Despido() }
            { Despido3() }
            <br/>

            <Contador $Valor={20}/>
        </div>
    );
}

/**
 * Notas de los DefaultProps.
 * 1.- Los DefaultProps entran antes que los PropTypes del componente.
 * 
 * 2.- Podemos definir los DefaultProps que nosotros queramos y esto no mandaría algún error.
 */
App.defaultProps = {
    titulo: "No hay título",
    subtitulo: "No hay subtítulo",
    valor1: 0,
    valor2: 0,
}

/**
 * Notas de los PropTypes.
 * 1.- Los PropTypes nos sirven para definirle el tipo de dato a las propiedades de los componentes,
 *     además por otra parte también podemos indicar si algún prop es obligatorio.
 * 
 * 2.- Cualquier PropTypes que no coincida con nuestras especificaciones, nuestra aplicación enviará un error en la consola.
 */
App.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    valor1: PropTypes.number.isRequired,
    valor2: PropTypes.number.isRequired,
}

export default App; // Exportamos el componente funcional.