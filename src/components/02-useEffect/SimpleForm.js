import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';





export const SimpleForm = () => {

    // para crear un formulario dentro un  componete , hay que manejar su estado si o si 
    // cuando se cambia el estado se renderiza de nuevo la funcion componente , asi se ejecuta todo el componente , solo la excepcion de useEffect segun la condicion
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    // extraer las props internas del estado del formualrio
    const { name, email } = formState;

    useEffect( () => {
        console.log('hey!');
    }, []);  // [] condicionarlo con array vacio se dispara solo la primera vez:primer renderizacion
    
   // console.log('fuera del useEfeect')
   
    // hay que saber que los hookes de efecto se dispara por la primer vez:Primer renderizacion de su componete  porque es la primer vez que captan la escucha y se considera como un cambio .

    useEffect( () => {
     // console.log('formState cambió');

      // cuando queremos ejecutar algo cada vez el formulario cambie , usamos effect cuyo dependencia es va ser lo que le interesa estar escuchando los cambios en este
      // caso el form state 
    }, [formState] );

    useEffect( () => {
      //  console.log('email cambió');
    }, [email] ); // en este caso el effecto esta escuchando cualquier cambio en la prop interna email en el estado  de tipo Objeto : formState 

    
    
    const handleInputChange = ({ target }) => {
        console.log(target.value);
        console.log(target.name); 
       //   console.log({[target.name]: 22}) // esta es la forma de asignar llave que compuesta de dos propiedades .  y si contiene mismo nombre de algun lleve del objeto donde lo estamos asignado su valor se cae enziam de la prop orinal interna del objeto tratado .  

        setFormState({
            ...formState, // mantener las props antiguas 
            [ target.name ]: target.value // esta es la forma de asignar llave que compuesta de prop de acceso [] 
        });

       

    }




    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name" /* asignar valor a la prop interna del objeto targer : objeto del formulario   */
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }  /* si te fijas la prop interna del input le estamos dando como valor una prop del objeto de estado  */
                    onChange={ handleInputChange }  /*  onChange es un evento se dispara por cualquier cambio en el input , dispara la funcion relacionada */
                />
            </div>


            <div className="form-group">
                <input 
                    type="text"
                    name="email"  // target.name returna email 
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>


            { (name === '123') && <Message /> } {/* esta es condicion si se cumpal se muestra el componete Message */}

        </>
    )
}
