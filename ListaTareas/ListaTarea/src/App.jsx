import { useReducer,useState  } from 'react'
import Formulario from './Componentes/Formulario/Formulario'
import { Types } from './Reducer/Type'
import { ReducerTareas, initialState } from './Reducer/Reducertareas'
import Tarea from './Componentes/Tarea'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(ReducerTareas,initialState) 
    
 const [editar ,setEditar]=useState(null)
  const obtenerTareas = (form) => {

    if (editar) {
      dispatch({ type: Types.editarTarea, payload: { ...form, id: editar.id } })
      setEditar(null


      )
    } else {
      setEditar(null)
      dispatch({ type: Types.añadirTarea, payload: form })



    }  } 
 const eliminarTarea = (id) => {
    dispatch({ type: Types.eliminarTarea, payload: id })
  }   
 
  const completarTarea = (tarea) => {
  dispatch({type:Types.completarTarea,payload:tarea})
}
    
  return (
    <><div>

    </div>
      <h1 className=''>Lista de tareas </h1>
      <Formulario
       obtenerTareas={obtenerTareas} >
      </Formulario>
      
      {state.tareas.map((tarea, index) => (
        <div key={index} className='tarea'>
          <Tarea
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            setEditar={setEditar}
            completarTarea={completarTarea}
          />
          
        </div>
      ))}
     
    </>
  )
}

export default App

