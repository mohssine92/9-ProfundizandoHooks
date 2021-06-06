import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';

import '../02-useEffect/effects.css'; // tambien se puede usar css de otro componente 

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCouter(1); // cuando voy a usar un cutom hook siempre Extraer lo que necesito en mi componente de funccion 
 
   // const state = useFetch( `https://www.breakingbadapi.com/api/quotes/1` );   console.log(state)
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

   
                        // recuerdo que esto es una condicion logica , y !! : esto es decir transformar null en false valor booleano , y si pasi ! : es decir true
                        // si viene !!data => true , pero sivien !!null => false , asi la condicion logica sabra lo que tiene que hacer , asi se no ejecuta , auth y quote tendran valores
                        // undefined
    const { author, quote } = !!data && data[0]; // console.log(`${author} --` , quote)


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

 
            {
                loading  // if true , siempre va ser true hasta que se resuelva la peticcion en cutom Hook .
                ?
                    (
                        <div className="alert alert-info text-center"> {/*tambien podemos extarer este div en un componente para que sea mas facil de ver  */}
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-2"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }


            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button> 

        </div>
    )
}
