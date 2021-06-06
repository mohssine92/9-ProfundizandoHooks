import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y: 0 })
    const { x, y } = coords;

    useEffect(() => {
        console.log('Componete montado') 
        
        // va como callback
        const mouseMove = (e) =>{
            const coords = { x: e.x, y: e.y };
            setCoords( coords );
            console.log('dd')
        } 
        
        window.addEventListener('mousemove', mouseMove );

        return () => {
           // esta es la fase de limpieza donde se puede cancelar la suscripciones observables emissiones etc , cacelar varios proceso de emisiones 

           // TODO : esta es la fase de limpieza , aqui se puede implementar la cancelacion de suscripciones o diferente cosas ...
           // En este ejercico : este componnete se muestra depende de una condicion , asi cuando no se cumpla la condicion se desmonta el componente ahhi exactamente donde ejecuta el return ...
           // en este caso cancelo evento mouse

            console.log('Componente desmontado')
            window.removeEventListener('mousemove', mouseMove );
        }
        

    }, []) // en este caso no voy a pasar ningun dependencia , quiero que se ejecute  cuando el componente sea renderizaedo por la primera vez .

  

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x:{ x } y: { y }
            </p>
        </div>
    )
}
