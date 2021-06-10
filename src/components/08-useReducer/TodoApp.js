import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => { // lo que returna esta funcion es lo que va ser inicial state , del useReducer , 
    
    return JSON.parse(localStorage.getItem('todos')) || []; 
    // esta funcion Json... perfectemente la podemos usar en el estado de useReducer y evitar init como alternativa  
    // Leer localStorage , si no existe nombre de la variable en localStorage regresa null : esto mi serve para  la condicion or , porque null puede reventar mi app
}


/* 
 * componnete padre
 */
export const TodoApp = () => {

     // ✔️ 
    /* Pensamos que useReducer como es una alternativa del useState , con mas funcionalidades esta es la diferencia 
    * su segunda instruccion que regresa en este arreglo es el dispatch : es una funcion le vamos a mandar una accion : es objeto con type , asi el dispach manda la accion a la funcion reducer: TodoReducer
    * todos el estado returnado - saliente de los procesos de useReducer: nuevo estado : depende del ObjetoAccion
    */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);   /* todoReducer : la funcion reducer recibe estado y el ObjetoAccion
                                                                        []          : es unn estado inicial que debemos mandar 
                                                                        init        : funcion es la que va ayudar a react computar este estdo inicial paraque funcione mas rapido el componente y esta funccion no esta reejuctando 
                                                                                      cada vez que hay cambios en el componente , es opcional  */
    // Hemos usado useReducer en caso real , hemos mandado varias funciones : usualmente cuando hay mucha logica envolucrada en algun estado usamos useReducer . recordar useReducer es una alternativa al useState 
    



    useEffect( ()=> {
        // guardar en local storage es hacer la informacion persistente en el navigador web .  no almacenar nada sisible , ni data depende de ella trabaja mi aplicacion : porque lo barra el user y se cae la app
        localStorage.setItem('todos', JSON.stringify( todos ) ); // problema de localstorage solo guarda strings no objetos

    }, [todos]); // 😎 segun : voy a guardar en local storage cuando todos presenta nueva version: esdecir  cambia , incluye estado inicial 



    // Tres funciones van a disparar el dispatch , estos funciones van a ejecutar useReducer , incluimos inicio del componente .

    const handleDelete = ( todoId ) => {  // ✔️ 

        const action = {
            type: 'delete',  // siempre no olvidar type : para entrar al case deseado
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) =>{ // ✔️ 
        
        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }

    // funcion normal corriente produce un dispatch , incluso lo puedo mandar a un componente hijo .
    const handleAddTodo = ( newTodo ) => {   // ✔️ 
       
        /* asi ya sabemos como hacer dispatch de una Accion */
        dispatch({  // llamada a la funcion dispatch , y pasarle como arg : el objeto Accion

            type: 'add',  /* recordaran las acciones tienen un type : add , delet , etcccc cierta a accion  */
            payload: newTodo // payload : mi nuevoTodo luego depende de la accion tendremos la salida del nuevo estado

        });

    }


    return (
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>   {/* useReducer returna colleccion todos que es mi estado  */}
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete }  // ✔️ 
                        handleToggle={ handleToggle }  // ✔️ 
                    />

                </div>


                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }  // ✔️ 
                    />
                    

                </div>


            </div>

        </div>
    )
}
