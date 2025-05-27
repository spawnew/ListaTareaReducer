const tarea=[] 






function ReducerTareas(state, action) {

    switch (action.type) {
        case "añadirTarea":

            return [...state, action.payload];
     



        case Default:
            return state;
    }
}