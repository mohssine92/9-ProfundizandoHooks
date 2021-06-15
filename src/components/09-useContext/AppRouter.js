import React from 'react';



/* 
 * este archivo me va servir a mi para configurar rutas de ami aplicacion 
 * una aplicaion puede tener mas que un router todo lo que ustedes necesitan  
*/


/* importacion necesaria para iniciar router */
import {
    BrowserRouter as Router, // alia renombrar , no es obligatorio poner la alia pero asi queda mas guay
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { NavBar } from './NavBar';

// componentes 
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';



// es un componente normal lo cual va encargar y trabajar y mostrar mis rutas
export const AppRouter = () => {
    return (
        <Router> {/*  no es nada mas un componente que se llama BroweserRouter */}
           
            <div> {/* se aconseja poner un div que envuelva todo lo que tenemos dentro - no es obligatorio : pero usualmente  vamos a tener mas que un componente dentro del router*/}
                
                <NavBar />  {/* definir un componente statico en el espacio del componente router */}

                <div className="container">
                  <Switch> {/* para mostrar rutas se usa switch es igual que el switch de cualquier lenguaje - Asi depende del path entrante de ejecuta Route relacionado */}
                       
                     {/* estos componentes estan como hermanos y estan al mismo nivel HomeScreen, etc... */}   
                     {/* si uno de ellos genera data y quiero pasarla al otro hermano . usamos useContext :D en nivel superior , centralizar data */}

                     <Route exact path="/" component={ HomeScreen } /> {/* exact : estamos diciendo al componente Route la url entrante tiene que ser exacta , para mas informacion sobre tipo de erro ver video 138 : nota path exact */}
 
                     <Route exact path="/about" component={ AboutScreen } />
                     <Route exact path="/login" component={ LoginScreen } />
                     
                     <Redirect to="/" /> {/* definicion de la ultima ruta : como es el default de un switch , si la ruta entrante no encuentra sus string exacto , ejecuta esta  instruccion */}

                  </Switch>
                </div>

            </div> {/* repito va a contener de la informacion que el router va a manejar */} {/* <></> ==> puede usar segment como alternativa  */}

        </Router>
    )
}
