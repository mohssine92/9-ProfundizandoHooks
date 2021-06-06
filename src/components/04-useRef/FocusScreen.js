import React, { useRef } from 'react';
import '../02-useEffect/effects.css';


export const FocusScreen = () => {

    
    // se puede hacer referencia a cualquier elemento html que tengamos en la application
    const inputRef = useRef(); // hacer referencia .. obtener acceso a sus propiedades.
    console.log( inputRef );

    const handleClick = () => {
       //  console.log( inputRef.current)

       // inputRef.current.focus(); 
        inputRef.current.select();  // en este caso se hace referencia al input y hace efecto focus y tambien select valor del input
        // console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }  // madar el hook como referencia al este input
                className="form-control"
                placeholder="Su nombre"
            />


            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>

        </div>
    )
}
