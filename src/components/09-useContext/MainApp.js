import React, { useState }from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext' // hair hhh componente igual que  <Switch> componente , blabla





/* 
 * el main es lo que voy a colocar en el index : es el punto principal de este aplicacion 
*/
export const MainApp = () => {

   /* puedo usar useReducer o cualquier otro hook que me sirva */
    const [user, setUser] = useState({});
    
 
    return (
      
      /* paraque me servir asi <UserContext.Provider > : me va servir para prover informacion a lo largo de todos sus componentes hijos : en este caso los componnetes hijos es todos lo que esta dentro de AppRouter y su difrerente rutas */
      /*  value es el valor a prover a los hijos - siempre ponemos dentro lo que queremos que comparta value */
       <UserContext.Provider value={{ 
         user,
         setUser,
         temporal: 123
       
       }} > {/* para prover solo una variable value = { user }  */}

     
        {/*  router lo voy a implementar aqui : colocar internamente aqui : paraque la applicacion sepa que rutas tiene y que direcciones tiene . Router se encarga de mostra componentes en el espacio de componente pagina de forma 
        condicional - asi sin  hacer refresh de la pagina y recargar varios tipos de archivos que existe en el navigador - puesto que sea necesarios. : la idea no hacer Refresh para cambiar entre pantallas */}
        {/* este componente es un router en esta ubicacion dentro de este componente de pagina MainApp va renderizando componentes depende de la entreda del url  */}
        <AppRouter /> 

        
       </UserContext.Provider>
       
    )


}


