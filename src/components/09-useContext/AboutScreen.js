import React , { useContext }  from 'react'
import { UserContext } from './UserContext'   // podemos decir data centralizasada  





/* 
* sirve para revisar esta informacion que otras paginas van a trabajar 
*/
export const AboutScreen = () => {

    const { user, setUser } = useContext( UserContext );

    const handleClick = () => {
        setUser({});
    } 

    return (
        <div>

            <h1>AboutScreen</h1>
            <hr />

             <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>


            <button 
                className="btn btn-warning"
                onClick={ handleClick }
            >
                Logout
            </button>
 
        </div>  // lo que hace vaciar objeeto user que se encuentra centralizado en UseConrtext
    )
}
