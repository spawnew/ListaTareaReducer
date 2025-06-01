import React from 'react'

const Tarea = ({tarea,eliminarTarea,setEditar,completarTarea}) => {
  return (
      <div className='flex flex-row w-100 justify-between border-2 p-2 m-2 bg-blue-200 rounded-lg shadow-lg'>
         
          {tarea.completada && <span className='text-green-500'>✔️</span>}
          <p className='text-bold text-1 p-2'>{tarea.tarea}</p>
          <div>
          <button className='flex-row justify-between border-2 p-1 m-1 bg-emerald-500 text-amber-100 rounded-lg shadow-lg hover:bg-black hover:text-blue-500'onClick={() => setEditar(tarea)}>Editar Tarea</button>
          <button className='flex-row justify-between border-2 p-1 m-1 bg-red-600 text-amber-50 rounded-lg shadow-lg hover:bg-black hover:text-red-600' onClick={() => eliminarTarea(tarea.id)}>Eliminar Tarea</button>
            <button className='flex-row justify-between border-2 p-1 m-1 bg-blue-500 text-amber-50 rounded-lg shadow-lg hover:bg-black hover:text-blue-500' onClick={() => completarTarea(tarea)}>{tarea.completada ? 'Desmarcar' : 'Completar'}</button>
          </div>   
    
          
      </div>
  )
}

export default Tarea