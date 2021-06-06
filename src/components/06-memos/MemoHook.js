import React, { useState, useMemo } from 'react';
import { useCouter } from '../../hooks/useCouter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

// Funcion componente , usa el hook useMemo
export const MemoHook = () => {

    const { counter, increment } =  useCouter( 50 );
    const [ show, setShow ] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);  /* [ counter ] : dependencia */
    {/*nosotros no tenemos que volver a ejecutar procesoPesado en cada vez se cambia algun estado en este componente y no tiene nada que ver con el proceso - sea como una renderizacion inecesaria ,
      lo resolvemos con useMemo : es decir grava la version ultima , si la dependencia cambia vuelva a ejecutar tu funcion de callback , usualmente alojada en helpers , retuename nueva version 
      - debe ser un poco logico la dependencia tiene que ser algo variable fundamental en el proceso pesado*/}

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small>  </h3>
            <hr />

            <p> { memoProcesoPesado } </p> 

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) } {/* show is boolean , se muestra en html usam la funcion json.strin.... */}
            </button>

        </div>
    )
}
