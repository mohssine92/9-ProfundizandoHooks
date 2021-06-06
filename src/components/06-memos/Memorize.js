import React, { useState } from 'react';
import { useCouter } from '../../hooks/useCouter';
import { Small } from './Small';

import '../02-useEffect/effects.css';


export const Memorize = () => {

    const { counter, increment } =  useCouter( 10 );  
    const [ show, setShow ] = useState(true); 

    return (
        <div>
            <h1>Counter: <Small value={ counter } />  </h1> {/* small es componnete hijo asi por defecto cualquier estado se cambia en este componente Memorize se vuelve a ejecutar el componente hijo
               fijate si en el componente hijo estamos haciendo peticiones http , esto tiene un coste inecesarios , asi la solucion es prevenir que el componente hijo no se vuelva a renderizarse si sus properties
               son las mismas :   */}
            <hr />


            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) } {/*los valores booleanos no se puede mostrar , por eso llamamos a Json:stringiFy  */}
            </button>

        </div>
    )
}
