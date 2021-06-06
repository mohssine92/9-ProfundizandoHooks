import React from 'react';
import { useCouter } from '../../hooks/useCouter';
import './counter.css';

// objeticvo de este Ejercicio es abstractar la logica de un contador en un custom hook y benificiar de counter dentro de cualquier componenteFuncion de la app  solo
// con dos lineas de codigo . 

export const CounterWithCustomHook = () => {

    // Extraer lo returnado del custom Hook , su logica es un contador  
    // Observacion : tener acceso a las funcionalidades y los estados expuestos de la parte de este custom Hook
    // counter:state => lo que estamos haciendo dentro de la desestructuracion es renombrar la variable de estado del custom Hook
    const { counter:state, increment, decrement, reset } = useCouter( 100 );
 
    return (
        <>
          <h1>Counter with Hook: { state } </h1>
          <hr />

          <button onClick={ () => increment(2) } className="btn btn-danger"> + 1</button>  {/* onClick : es un evento dispara una funcion */}
          <button onClick={ reset } className="btn btn-info"> Reset </button>               {/* buscar ma s eventos en la doc ver mas ejemplos en Dev */}
          <button onClick={ () => decrement(2) } className="btn btn-info"> - 1</button>  
           {/* no olvidar siempre que las funciones que esparan Args siempre hay que mandarles argumentos , las no esperan nada solo la definimos */}
        </>
    )
}


// las formas en cual podemos usar contador como este : carrito de compra react example