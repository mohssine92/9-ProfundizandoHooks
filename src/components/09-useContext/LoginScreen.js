import React , { useContext }  from 'react';
import { UserContext } from './UserContext';



/* 
* esta aplicacion 09 - va tener un login , es nada que vayamos a conectar a una api de momento : solo queremos que se guarde el usario .
*/
export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button  /* podia sustituir de un formulario html usando el custom hook useForm */
                className="btn btn-primary"
                onClick={ ()=> setUser({
                    id: 123,
                    name: 'Fernandos'
                })}
            >
                Login
            </button>
        </div>
    )
}
