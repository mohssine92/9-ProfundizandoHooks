import React from 'react'
                             //  occupamos React.memo para que memorize este componente si el argumento / properties no se han cambiado 
export const ShowIncrement = React.memo(({ increment }) => {  /* increment constante almacena una version memorizada de la funcion que va hacer x accion , gracias al HOOK USECALLBACK por memorizarme en memoria la funcion mientras el componente padre esta montado
    .... ver componente padre para entender mas sobre el comportamiento   */
 
   
      console.log(' Me volví a generar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
              increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})


// podemos ponerle propertipes porque la funcion increment tien que ser obligatoria