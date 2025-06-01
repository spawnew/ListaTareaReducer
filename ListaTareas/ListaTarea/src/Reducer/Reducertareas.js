
import { Types } from './Type'  


export const initialState = {    tareas: []} 






export function ReducerTareas(state, action) {

    switch (action.type) {
        case Types.añadirTarea:

            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            
            }
        case Types.eliminarTarea:
           
            return {
                ...state,
                tareas: state.tareas.filter((item) => (item.id !== action.payload)),

            }
            
        case Types.editarTarea:
            
            
            return {
                ...state,
                tareas: state.tareas.map((tarea) => (tarea.id === action.payload.id ?
                    {...tarea, tarea: action.payload.tarea} : tarea)),


            }
        case Types.completarTarea:
            
            
            return {
                

        }


         default:
            return state;
    }
}