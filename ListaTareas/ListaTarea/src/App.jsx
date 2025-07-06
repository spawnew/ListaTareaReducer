import { useReducer, useState, useEffect } from 'react';
import Formulario from './Componentes/Formulario/Formulario';
import { Types } from './Reducer/Type';
import { ReducerTareas } from './Reducer/Reducertareas';
import Tarea from './Componentes/Tarea';
import { useLocalStorage } from './Componentes/hook/useLocalStorage';
import './App.css';

function App() {
 
  const [tareasGuardadas, setTareasGuardadas] = useLocalStorage('tareas', []);
  const initialState = { tareas: tareasGuardadas };

  const [state, dispatch] = useReducer(ReducerTareas, initialState);
  const [editar, setEditar] = useState(null);

  
  useEffect(() => {
    setTareasGuardadas(state.tareas);
  }, [state.tareas]);

  const obtenerTareas = (form) => {
    if (editar) {
      dispatch({
        type: Types.editarTarea,
        payload: { ...form, id: editar.id }
      });
      setEditar(null);
    } else {
      dispatch({ type: Types.añadirTarea, payload: form });
    }
  };

  const eliminarTarea = (id) => {
    dispatch({ type: Types.eliminarTarea, payload: id });
  };

  const completarTarea = (tarea) => {
    dispatch({ type: Types.completarTarea, payload: tarea });
  };

  return (
    <div className='flex flex-col w-150 items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
      <h1 className='text-amber-100 text-xl font-bold'>Lista de tareas</h1>

      <Formulario obtenerTareas={obtenerTareas} editar={editar} />

      {state.tareas.slice(0, 8).map((tarea, index) => (
        <div key={index} className='tarea'>
          <Tarea
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            setEditar={setEditar}
            completarTarea={completarTarea}
          />
        </div>
      ))}
    </div>
  );
}

export default App;