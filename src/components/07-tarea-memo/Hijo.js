import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => { // React.memo resfurza la memorizacion de este componente mientras las properties son las mismas sin cambios 

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
