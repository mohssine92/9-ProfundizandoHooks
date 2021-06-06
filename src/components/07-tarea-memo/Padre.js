import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

import '../02-useEffect/effects.css';


export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }
    const incrementar = useCallback( (num) => {  // num es arg de increment 
        setValor( v => v + num )  
    }, [ setValor ]); // setValor es la dependencia de ejecuccion , segun esta dependencia se ejecuta solo cuando se monta el componente no cuando se renderiza de nuevo , como es el caso cuando algun estado del componente se cambia



    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }  /* los numeros son los mismo no van a sufrir cambios asi no hay problema por Reat.memo */
                        incrementar={ incrementar } /* increment esta memorizada en la memoria cuando se monta componente padre por la primera vez , asi no hay problema por React.memo */
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

/* asi el estado se va cambiando, componente padre montado se renderiza cada vez se cambia estado , la funccion increment no se va a ejecutar por deppendecia y esta memorizada su ultima version al montar el componente  gracias al hook usecallback 
  y lso componentes hijo (s) estan memorizados en la memoria gracias a React.memo */ 