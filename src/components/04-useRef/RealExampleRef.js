import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';



// este ejemplo para hacer uso de useRef en caso Real

export const RealExampleRef = () => {

    // este estado fue creado paraque nos sirva para mostrar y occultar el componente  MultipleCustomHooks
    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks  /> }  {/* renderizar componente de manera condicional */}

            <button
                className="btn btn-primary mt-5"
                onClick={ () => { /* el Evento  se dispra => .. , en escucha de un click */
                    setShow( !show ); /* siempre el valor opuesto  , si es true va ser false , y si es false va ser true*/
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
