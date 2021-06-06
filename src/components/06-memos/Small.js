import React from 'react'

export const Small = React.memo(({ value }) => {   /* React.memo : la funcion memo memoriza las properties del componente , lo que hace no permite que el componente se vuelva a renderizarse hasta que las
                                                   las properties entrantes se cambian , si son las mismas no se vuelva a renderizarse , en cambio va usar la version renderizada cuando va debujar algo */
                                                                                                                                      
    console.log(' Me volví a llamar :(  ');
    // http?

    return (
        <small> { value } </small>
    )
});

