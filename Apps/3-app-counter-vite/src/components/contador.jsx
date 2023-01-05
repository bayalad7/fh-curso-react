import PropTypes from "prop-types"

const Contador = ({ $Valor }) => {
    const Incrementar = () => {
        /**
         * Cuando nosotros hacemos un cambio en el estado de nuestro componente [$Valor++],
         * tenemos que decirle a React que hicimos un cambio en el estado del componente.
         * De lo contrario este no se reflejará en la aplicación...
         */
        $Valor++;
        console.log( $Valor );
    }
    const IncrementarConEvento = (event) => {
        console.log( event );
        $Valor++;
        console.log( $Valor );
    }
    return (
        <>
            <h1>App Contador: { $Valor }</h1>
            <button onClick={ Incrementar } >¡Click aquí!</button>
            <button onClick={ (event) => { IncrementarConEvento( event ) } } >¡Click aquí con información del evento!</button>
        </>
    );
}

Contador.defaultProps = {
    $Valor: 0,
}

Contador.propTypes = {
    $Valor: PropTypes.number.isRequired,
}

export default Contador;