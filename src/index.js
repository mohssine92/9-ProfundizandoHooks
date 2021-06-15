
//import './components/08-useReducer/intro-reducer';
import React from 'react';                                                   /* Hook-app va ser como docuemntacion de los hooks */
import ReactDOM from 'react-dom';


//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm'; 
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'; 
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';  
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
//import { MemoHook } from './components/06-memos/MemoHook';
//import { CallbackHook } from './components/06-memos/CallbackHook';
//import { Padre } from './components/07-tarea-memo/Padre';
/* seccion:10 */
//import { TodoApp } from './components/08-useReducer/TodoApp';
/* seccion : 11 */
import { MainApp } from './components/09-useContext/MainApp';














ReactDOM.render(
/* recordar esta app es como docs , cada vez quiero estudiar comportamiento de algun componenet o custom hook rederizo su componente  - asi tengo carpetas donde he implementado pequeñas aplicacion - que alfinal terminan cons
   truyendo aplication de gran escala   */
  <MainApp />, 
  document.getElementById('root')

);