
import { Types } from './Type'  


export const initialState = {    tareas: []} 






export function ReducerTareas(state, action) {

    switch (action.type) {
        case Types.añadirTarea:

            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            
            }



         default:
            return state;
    }
}