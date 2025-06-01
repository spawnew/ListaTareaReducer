import React from 'react'

const Tarea = ({tarea,eliminarTarea,setEditar}) => {
  return (
      <div className='flex flex-row justify-between border-2 p-2 m-2 bg-slate-100 rounded-lg shadow-lg'>
         
          
          <p>{tarea.tarea}</p>
          <div>
          <button className='flex-row justify-between border-2 p-1 m-1 bg-slate-100 rounded-lg shadow-lg hover:bg-black hover:text-red-600' onClick={() => eliminarTarea(tarea.id)}>Eliminar Tarea</button>
          <button className='flex-row justify-between border-2 p-1 m-1 bg-slate-100 rounded-lg shadow-lg hover:bg-black hover:text-blue-500'onClick={() => setEditar(tarea)}>editar Tarea</button>
          </div>   
    
          
      </div>
  )
}

export default Tarea