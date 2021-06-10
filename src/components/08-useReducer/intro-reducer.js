/* esta es solamente una intruduccion : concepto general  , el proximo ejemplo sera real usamos React y el useReducer */




/* establecer estado inicial - perfectamente constante puede tener cualquier nombre  */
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

/* este es mi primer reducer : usalmnete recibe state y la accion:el que va modificar el state  , returna nuevo statate */
const todoReducer = ( state = initialState, action ) => {
    /* action la cual va modificar el state 
     - esta funcion no puede hacer peticiones asincronas
     - no puede dispara funcciones de esfectos segundarios : porque si dispara funccion interamente puede ser que falla produzca error , y el estado no sera returnado con exito   
     - tiene que resolverse con sus argumentos nada mas .  
     - else : nose puede hacer else returna nul o undefined sera en contra de las reglas de los reducers
     */ 



    // procezar el agregar 
    if ( action?.type === 'agregar' ) { // action en el primer ejecuccion sera undefined y no se puede leer prop de objeto undefined asi los mas facil poner : ? confia en mi va tener valor
        return [ ...state, action.payload ]; // state es estado interior: n de objetos con ... operador spreat se caen los objetos independientes en la coleccion , luego en el ultimo index se cae el objeto que viene en pauload : sin usar push 
    }

    return state; // nuevo estado
}
let todos = todoReducer();   console.log(todos);


// quiero agregarlo a state inicial , No voy a usar push , en react no usamos push .
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}
/* Action : segundo arg parareducer */
const agregarTodoAction = {
    type: 'agregar', // type le va a decir a reducer que tipo de accion es , si es accion para agregar , borrar, eleminar ..... 
    payload: newTodo // payload lo que quiero insertar en este caso
}
todos = todoReducer( todos, agregarTodoAction );   console.log(todos)
 


// quiero agregarlo a state inicial , No voy a usar push , en react no usamos push .
const TwonewTodo = {
    id: 3,
    todo: 'Comprar colcao',
    done: false
}
/* Action : segundo arg parareducer */
const agregarTwoTodoAction = {
    type: 'agregar', // type le va a decir a reducer que tipo de accion es , si es accion para agregar , borrar, eleminar ..... 
    payload: TwonewTodo // payload lo que quiero insertar en este caso
}
todos = todoReducer( todos, agregarTwoTodoAction );   console.log(todos)



