import React from 'react'
import { AppComponents } from './AppComponents'
import { ExerciseProvider } from '../PageContext/ContextGlobal.js'

function App() { 

  return (
    <ExerciseProvider>
        <AppComponents/>
    </ExerciseProvider>
  )
} // En react los complementos de la pagina primero deben estar dentro de un div porque no se pueden devolver todos los componentes de una en el return y otra forma de hacer esto es con <React.Fragment></React.Fragment>

  export {App}
