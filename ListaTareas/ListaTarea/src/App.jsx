import { useReducer,  } from 'react'
import Formulario from './Componentes/Formulario/Formulario'
import { Types } from './Reducer/Type'
import {ReducerTareas,initialState}from './Reducer/Reducertareas'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(ReducerTareas,initialState) 
    

  const obtenerTareas = (form) => {
    (dispatch({ type:Types.añadirTarea, payload: form }))



   } 
    
    
    
    
  return (
    <>
      <Formulario
       obtenerTareas={obtenerTareas} >
      </Formulario>
      
      {state.tareas.map((tarea, index) => (
        <div key={index} className='tarea'>
          <h3>{tarea.tarea}</h3>
         
        </div>
      ))}
    </>
  )
}

export default App

