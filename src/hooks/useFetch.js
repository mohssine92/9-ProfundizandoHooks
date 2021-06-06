import { useState, useEffect, useRef } from 'react';


// adicionalmente se va  crear un componente donde va trabajar este custom hook
// este custom hook , se va encargar de hacer peticcion http , siempre a lo largo del curso vamos mejorandole , y resolver escenarios que pueden romper el proceso


export const useFetch = ( url ) => { // necesito que el componente que me prova un url al que voy a llamar 
    
   // useRef()
   /*fue craeado para resolver problema , sabemos si la resolucion de la llamada http que debe ser returnada al componente tardo asi mientras que se resuelva despues de que el componeente fue 
     desmontado por el user por navigacion rapida . esto hace crash de la app . */
    const isMounted = useRef(true);


    const [state, setState] = useState({ data: null, loading: true, error: null }); // variable de estado del useFetch , puede tener varias variables :D

    useEffect( () => {
       

        return () => { // se dispara inmediatamente cuando se desmonta el hook
            isMounted.current = false; // este cambio no va a dispara nuevamente la renderizacion de mi componente
           
            console.log('desmontado')   /*tener en cuenta este hook esta usado por un componente es decir todos los returns de effectos que esta implementados en el componente o el hook , nada mas se desmonta
                                         el componente daran cuenta .*/
        }

    }, []) // si dispara solo en primer rederizacion del hook : es decir cuando se monta el hook por primer vez 


    useEffect( () => { 

        // paraque cuando yo toco siguiente se parece loading mientras se resuelva la peticion http.
        setState({ data: null, loading: true, error: null });

        fetch( url )   //llamar a una promesa , y encadenamiento de funciones 
            .then( resp => resp.json() )
            .then( data => {

              //console.log(data)
              // aqui el crash de la app se puede producir por ejemplo cuando la respuesta tarda ... hay varios factores aqui vamos a ver como resolver usando useRef() hook .
              // puede hacer tardar setStat cerandola en un setTimeout ver video 114 minuto 4:47 , para mas detalles sobre el error
            
               
                /*  setTimeout(() => { setTimeout solo para explicar el caso , en caso cuando trabajamos en proyecto no usamos setTimeout 
                }, 4000); */

                  if ( isMounted.current ) {  // cuando se resuelve y el componente ya esta desmontado , la condicion sera false asi no va poder cambiar el estado , asi evitamos el crash
 
                     setState({  // aqui obviamente con la peticion asincrona cambiamos el estado
                         loading: false,
                         error: null,
                         data
                     });


                     console.log('resuelto , y no hay crash')
                  }

               

            });

    },[url]) // este efecto quiero que se dispara cuando url se inicia por primer vez , luego se dispara cuando su valor inicial sufre cambios

    return state;  /* esto es el objetivo de este custom hook es recibir como entrada url a llamar ..., y devolver un objeto con la data traeda , state es variable de estado esblecida con la
                      la resolucion de la peticion http ,  */

            
}

// hasta ahora tenemos este hook perzonalizado useFetch mas seguro , asi cuando desmontamos el componente donde se usa antes que se resuelva la llamada no se va crashear la app