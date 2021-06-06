import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

  // para aclarar una cosa , CounterApp  es un componente de funcion , nosotros estamos acustumbrados de trabaja con componentes de class como en angular o livewiree 
  // de laravel , ok . objetivo es implementar Hook de la api de react = useState , sabemos que los hooks y los customs Hooks  son simples funciones y si no se renderizen 
  // dentro de una funcion componente daran fallo : asi no se puede implementar todos los tipo de hooks fuera de funcion componente de react . 

    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    }); // el estado es un objeto , sabemos cuando llamo al useState cambio el estado ,  esta la forma de cambiar solo la prop interna del objeto que quiero y mantener las demas sin perderlas 

    const { counter1, counter2 } = state;

    // console.log(counter)

    return (
        <>
         <h1>Counter1 { counter1 } </h1>
         <h1>Counter2 { counter2 } </h1>
         <hr />

         <button 
            className="btn btn-primary"
            onClick={ () => {
                setState({
                    ...state,
                    counter1: counter1 + 1,
                    counter2: counter2 - 1
                });
            }}  /* asi tengo manejo total sobre las props internas del objeto , cada prop lo manejo tal cual quiero , asi voy jugando con el esrado */
        >
             +1
        </button>
        </>
    )
}
