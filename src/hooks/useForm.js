import { useState } from "react"


// adicionalmente se va crear un componente donde va trabajar este custom hook


/* este es un custom hook que va encargar de manejar los formularios , porque en mi app voy a tener muchos formualrios , asi este cutom hook sea exportado para todos formularios de la app
  asi no tiene sentido escribir codigo para la accion de un formulario en la funccionComponente es rendundacia y codigo que realmente no de be estar alli esto es todo*/


export const useForm = ( initialState = {} ) => {  // porue objeto vacio , no quiero que se revienta si no me manden nada la fucionComponente , si initialState es el objeto recibido del form .
    
   // podemos aplicar cualquier cantidad de logica qui , por ejemplo puede recibir otro argumento que sea reglas de validacion , campo obligatorios etc ..

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange ];
    // siempre tengo la posiblidad de elegir como quiero regresar la data como objeto , colleccion etc ...
}


/* aqui vemos el poder que tienen los cutoms Hooks , centralizacion de logica  de maneja un formulario  */
// TODO: uso  de este custom hook , simplemente defino las props internas del objeto leteral  que voy a mandar como argumento depende del inputs del form del que se trata . 