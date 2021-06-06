import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    // desestructuracion de colloceccion , recordar que son args posicionales lo que hace puedo usar el nombre que yo quiero
    const [ formValues, handleInputChange ] = useForm({ 
        name: '',
        email: '',
        password: ''
    }/*, ['name','email','password']*/); // asi la coleccion se puede recibir del lado del custom hook y se procesa como validacion de prop obigatoria

    const { name, email, password } = formValues;

    useEffect( () => {
        console.log('email cambió')
    }, [ email ]); // estse effecto su dependecia es email , escucha cualquier cambio en email para dispararse

    const handleSubmit = (e) => {  // lo que donominamos el posteo de formulario , manejador de eventos 
       // console.log(e)
        e.preventDefault();

        console.log( formValues );
    }


    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group mb-2">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>


            <div className="form-group mb-2">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group mb-2">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>


            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
