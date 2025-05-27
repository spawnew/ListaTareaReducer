import { useReducer,  } from 'react'
import Formulario from './Componentes/Formulario/Formulario'
import {Types} from './Reducer/Type'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(state, action) 
    

  const obtenerTareas = (form) => {
    listatarea(dispatch({ type:Types.añadirTarea, playload: form }))



   } 
    
    
    
    
  return (
    <>
      <Formulario
       obtenerTareas={obtenerTareas} >
      </Formulario>
      
      <h1>{state}</h1>
    </>
  )
}

export default App

