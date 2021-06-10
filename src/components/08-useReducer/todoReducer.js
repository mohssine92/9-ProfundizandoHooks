/* esta es la funcion reducer como hemos visto recibe estado inicial y el objeto accion , returna nuevo estado ... , en este caso va ser usada en Hook useReducer 
 * asi despues de su procedimiento , el useReducer tendra salida de nuevo estado para  el componente donde se ejecuta useReducer . 
 */
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) { // switch se usan siempre cuando estas comparaciones seran puntuales es decir sera posible compararles con === ,
        case 'add':
          // ahora mi reducer sabe que hacer si le mando objeto accion con type add : lo que va hacer es agregar .

         return [ ...state, action.payload ]; // state es una coleccion de objetos , con spreat ...[] : se compila a objetos independientes ., asi el en ultimo index se agrega objeto de todo entrante

        case 'delete':
            return state.filter( todo => todo.id !== action.payload ); // filter regresa todos elementos de ese arreglo que cumpla la condicion , para borra elemento regresamos todos elementos su  id diferente al que vamos a borra , esto es todo .
                                                                       // Ojo payload en este caso nos trar id , no Objeto

        case 'toggle': 
            return state.map( todo =>   // map va ciclar sate que es coleccion de todos , payload me va traer id del todo actual 
                ( todo.id === action.payload )  // segnificaria que es ele lemento que quiero cambiar 
                    ? { ...todo, done: !todo.done } 
                    : todo // else returno mismo elemento para no mutar o destruir ALGO
            );

        case 'toggle-old':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }

            })

        default:   /* type tiene que conocerlo mi reducer , sino regresa el mismo estado  */
            return state;
    }


}