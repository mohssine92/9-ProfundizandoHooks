import { useState } from "react"


// adicionalmente se va crear un componente donde va trabajar este custom hook


/* este es un custom hook que va encargar de manejar los formularios , porque en mi app voy a tener muchos formualrios , asi este cutom hook sea exportado para todos formularios de la app
  asi no tiene sentido escribir codigo para la accion de un formulario en la funccionComponente es rendundacia y codigo que realmente no de be estar alli esto es todo*/


export const useForm = ( initialState = {} ) => {  //  objeto vacio , no quiero que se revienta si no me manden nada la fucionComponente , si initialState es el objeto recibido del form .
    
   // podemos aplicar cualquier cantidad de logica aqui , por ejemplo puede recibir otro argumento que sea reglas de validacion , campo obligatorios etc ..

    const [values, setValues] = useState(initialState);

    //resetear formulario
    const reset = () =>{
      setValues(initialState);
      // porque se vacia asi ?, porque el objeto de estado recibido es vacio, a diferencia del estado de salida depende de la funcion procesada en este custom hook
    }

    const handleInputChange = ({ target }) => {
        // console.log(targer.name, targer.value)
        setValues({
          ...values, /*...values para mantener las prop del form cuando se trata e recibir un objeto de estado de form con varias prop nombre , apellido , edad etc .. pero en el caso solo deseamos cambiar una prop , porque sino
                       las salida va ser nuevo estadp obvio , asi no se mantienen se pierden    */           
          [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];
    // siempre tengo la posiblidad de elegir como quiero regresar la data como objeto , colleccion etc ...
    /* tener claro lo que esta en la coleccion esta exportado al componente que va usar este hook , como es el caso de la funcion como es exportada se puede ejecutarla desde el componente : en este caso va modificar el estado entrante interamente y emita 
       nueva salida nuevo esto */
}


/* aqui vemos el poder que tienen los cutoms Hooks , centralizacion de logica  de maneja un formulario  */
// TODO: uso  de este custom hook , simplemente defino las props internas del objeto leteral  que voy a mandar como argumento depende del inputs del form del que se trata . 