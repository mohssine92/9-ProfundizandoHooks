import { useState } from 'react';    


// objetivo de cutom hook abstractar una logica como enn este caso la logica del contador para poder reutulizar 

// custom hook no es nada mas un simple funcion
// se usa prefix use para indicar que  es un hook 
export const useCouter = ( initialState = 0 ) => {  // 10 valor por defecto

    // crear un estado
    const [counter, setCounter] = useState(initialState); // 10
    console.log(counter)

    const reset = () => {
      setCounter( initialState );
    }

    const increment = () => {    // (inc) =>  mejor no mandamos el factor
      setCounter( counter + 1 );  //( counter + inc ) ejemplo si mandamos factor
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }; // [] , tambien se puede regresar estos instrucciones en un arreglo , en este caso regresamos en un objeto

} // este custom hook estar returnando , su estado y sus funcinalidades , asi podemos hacer uso del dentro de una funcion componente de react . 
