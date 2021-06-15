import { createContext } from 'react';


/* este archivo va exportar un context 
 : un context es basicamente un componete 
   ahora empezemos con algo sensillo  null, luego establecemos valor por defecto
   de momento : lo cae in value de la instancia provider se injecta en los componnetes hijos de UserContext  
 */
export const UserContext = createContext(null); /* para saber mas sobre tipo del componente : video:140 nota  */