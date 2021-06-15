import React , { useContext } from 'react';
import { UserContext } from './UserContext';





/* 
 * usualmmente usamos scren o page para indicar que es un componente pagina : es decir que es la ruta principal(es decir uno de los componentes conectados a mi router) , y dentro de este componente usualmente vienen otros componentes  
 * aqui quiero tener informacion del usuario logueado 
*/
export const HomeScreen = () => {

   /* arg va ser el UserContext que tenemos definido en la app , simplemente lo que estamos diciendo a useContext busque la siguiente instancia en este arbol de componentes que se de tipo UserContext */ 
    const{ user }  = useContext( UserContext );

  

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre> 

        </div>
    )
}
