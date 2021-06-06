
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# temas 

*customs hook : hooks perzonalizados parami
1- useCounter : countador , se puede usar en cualquier componente de la app
2- useFetch : para hacer peticiones http get se puede usar en cualquier componente de la app , esta configurado si el user desmonta el componente que lo usar antes que resuelva la promesa de la peticion paraque no se rompa la app , todavia necesita mejora
              como hacer peticiones usando diferentes verbos http ... etc .
3- useForm : hacer accion del formulario . se puede usar en cualquier formulario html del cualquier componente 

*hooks vistos en la seccion 
use state  : estado de un componnete u custom hook , tanto componente como custom hook pueden tener varios estados 
useEffect : es un hook de dependencia de ejecuccion , y tambien hemos visto su return : limpieza de emissiones 
useRef : referencia a un elemento html , 
useCallback : memorizar version de un objeto funcion en una constante . y tambien React.memo : memorizar la ultima version de un componente , ye hemos visto la funcionalidad de ambos cama cada uno cumple al otro . useCallback y React.memo

*helpers : utulizacion de una funccion que consta de un proceso pesado , en nuestro componente .

*en general en esta seccion hemos concentrado como evitar varios componentes hijos o hooks perzonalizados o funciones helpers que no se ejecutan cuando el componente padre se reejecuta cada vez cambia un estado , y que se ejecuten estos 3 solo cuando relmente
sera afectados segun dependencias .. 