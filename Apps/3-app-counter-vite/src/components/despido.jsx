import { Fragment } from "react";

export const Despido = () => {
    return (
        // Todos los componentes funcionales deben tener un elemento de HTML padre al momento de realizar el return del contenido
        <Fragment> {/* <-- Fragmento (Elemento padre) */}
            <h1>Benjamín <span>adiós</span></h1>
            <h1>Rubí <span>adiós</span></h1>
        </Fragment>
    );
}

export const Despido2 = () => {
    return (
        <> {/* <-- Sinónimo de fragmento (Elemento padre) */}
            <h1>Benjamín <span>adiós</span></h1>
            <h1>Rubí <span>adiós</span></h1>
        </>
    );
}