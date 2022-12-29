import { Saludo } from "./components/saludo"
import { Despido, Despido2 } from "./components/despido"

const App = () => {
    const Nombre = "Benjamín Ayala";
    return (
        <div>
            <h1>
                ¡Hola Mundo! Desde nuestro primer componente.
            </h1>
            { Saludo(Nombre) } y { Despido() }
        </div>
    );
}

export default App; // Exportamos el componente funcional.