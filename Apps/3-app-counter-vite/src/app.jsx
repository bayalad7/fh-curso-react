import { Saludo, Despido } from "./components/saludo"

const App = () => {
    const Nombre = "Benjamín Ayala";
    return (
        <h1>
            ¡Hola Mundo! Desde nuestro primer componente. { Saludo(Nombre) } y { Despido(Nombre) }
        </h1>
    );
}

export default App; // Exportamos el componente funcional.