import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => { // props funcion recibida del padre

    // NB: cuando desestructuro prop del objeto como es el caso de description obtengo el valor directamente 
    const [ { description }, handleInputChange, reset ] = useForm({
        description: '' 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
       
        // evito que me agrega un string vacio
        if ( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        
        handleAddTodo( newTodo ); // newTodoObject recibido en dispatch funcion
        reset(); // si quiero resetear formulario llamo justo a esta funccion 
        
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>  {/*cuando teclo enter or agregar */}

                <input 
                    type="text"
                    name="description" // igual como lo colocamos en la prop del objeto que mandamos a useForm 
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={ description } // es la variable de salida del custom hook 
                    onChange={ handleInputChange } // cuando empiezo a escribir
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>


            </form>
            
        </>
    )
}
