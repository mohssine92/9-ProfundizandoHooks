/* esta es una funccion simple generadora de numeros esta usada en mi componente , y la estoy ejecutando dentro de un hook useMemo , el que va controllar su ejecuccion segun dependencia que declaramos 
   asi entendemos su ejecuccion depende de su dependencia y no depende de la renderizacion del componente , que se puede renederizarse cada ves se cambia valor de algun estado en el mismo componente*/
   

export const procesoPesado = ( iteraciones ) => {

    for( let i = 0; i < iteraciones; i ++ ){
        console.log(`${i} - Ahí vamos....`);
    }

    return `${ iteraciones } iteraciones realizadas.`;
}
