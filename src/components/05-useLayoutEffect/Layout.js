import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';

import './layout.css';

export const Layout = () => {

    const { counter, increment } =  useCouter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    const { quote } = !!data && data[0];

    // necesito mantener la referencia a una caja html pues implemento useRef()
    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () =>  {
       /* ahora el objetivo de useLayoutEffectes es que despues de que se renderize algo yo puedo sacar mediciones como quedo un div , o diferentes componentes Tamaños o ejecutar codigo en si despues de que ya 
          se ha redizado todo mi html */ 
        
        setBoxSize( pTag.current.getBoundingClientRect() );   //console.log( pTag.current.getBoundingClientRect())
        // getBoundingClientRect() : lo que hace esta funcion captar tamaño y ubicacion del elemento dom al que referemos : sacardimenciones de la caja

    },[quote]) // tiene la misma firma que useEffect , la diferencia es : se despara cuando se renderize todos elementos del dom , no olvidar la dependencia es cuando  quote sufre cambios

    

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p   /* tener en cuenta las vajas cambia ed tamaña en funccion del connido html */
                    className="mb-0"
                    ref={ pTag }
                > 
                    { quote } 
                </p>
            </blockquote>


            <pre>
                { JSON.stringify( boxSize, null, 3 ) } {/* forma de dibujar objeto en html  */}
            </pre>


            <button 
                className="btn btn-primary"
                onClick={ increment }  /* evento espera un click */
            >
                Siguiente quote
            </button>

        </div>
    )
}
