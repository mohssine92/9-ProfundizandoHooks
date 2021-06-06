import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }



    /*increment es una constante que almacena una funcion asi cada vez se renderiza el componente , por consecuencia se vuelve a generar esta funcion increment , asi esta fucion que es un objeto ocupa nuevo espacio de memoria asi React.memo no me sirva 
      para nada porque para el es un objeto nuevo y permite la renderizacion del componente de nuevo  - entonces qui donde nos va servir useCallback hook */
   

    // useCallback hook tiene dos casos principales uno de ellos cuando occupamos mandar una funcion a un componente hijo
    
    const increment = useCallback( (num) => { // num : recibe el arg que pasanmos al llamar la constante increment
        setCounter( c => c + num );
        /*recordar setCounter tambien puede cambiar su estado atraves de callback cuando no se ejecuta en el mismo nivel del estado , en la dependencia no podemos pasar el estado porque se va incrementar en cada click lo que hace usecallback se ejecuta
         de nuevo y se almacena en increment constante , nosotros sabemos que la funcion es un objeto , asi si se ejecuta de nuevo la relidad la funcion es la misma pero por nueva ejecuccion occupa nuevo espacio en la memoria asi React.memo no va servir en este 
         caso porque no se trata de un string . es decir nueva renderizacion nueva ejecuccion nuevo espacio de la memoria objeto diferente , lo que hace exactamente USECALLBACK HOOK MEMORIZAR LA VERSION DE LA FUNCION QUE EJECUTO LA ULTIMA VEZ ASI SI LA DEPENDENCIA
         NO SE CAMBIA Y EL COMPONENTE PADRE SE RENDERIZE Y NO VA EJECUTAR INCREMENT NO HAY PROPLEMA PORQUE TENGO LA ULTIMA VERSION DE LA FUNCION QUE INCREMENTAR VALOR DEL ESTADO EN 5 EN MEMORIA , GRACIAS AL HOOK USECALLBACK POR MEMORIZARME LA ULTIMA VERSION . 
         QUE PUEDO SEGUIR USANDO QUE MAGIA :D */
           
         
    }, [ setCounter ] ); // [ setCounter , counter ] asi el counter se incrementa y se vuelva a ejecutar esto esto no me sirviria tendremos el mismo caso 
    
    
    useEffect( () => {
        // ???
    }, [increment] )


    return (
        <div>
            <h1>useCallback Hook:  { counter }  </h1>
            <hr />

            <ShowIncrement increment={ increment } /> {/* la funcion incremente sera mandada como referencia al showComponent */} {/* asi por entender cada click la version memorizada de increment es la que sera mandada  */}

        </div> /* El objetivo de este ejercicio que el componente ShowIncrement que representa un buton que dispara una funcion no se renderize no se redebuja cada vez se renderiza el componente padre y sigua la funccion que le estamos pasando como arg 
                   en memoria para realizar su trabajo  */
    )
}
