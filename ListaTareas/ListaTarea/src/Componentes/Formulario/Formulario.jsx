
import { useState } from 'react'
const Formulario = ({ obtenerTareas }) => {
 
    const [form, setForm] = useState({ tarea: "",id: null })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
            , id: Date.now() // Asignar un ID único basado en la fecha y hora actual
           
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
     
        obtenerTareas(form)
        setForm({ tarea: "" }) // Limpiar el campo de entrada después de enviar
    }
    return (
        <div>


            <form className='w-100' onSubmit={handleSubmit}>
                <input className='border-2 bg-blue-200 m-1 p-1  '  type="text" onChange={handleChange} name="tarea" value={form.tarea} placeholder='Ingrese una tarea' >
                </input>
              

                <input className='border-2  bg-emerald-600 text-amber-50 m-1 p-1 rounded-xl hover:bg-blue-200 hover:text-blue-950'  type="submit" ></input>

            </form>


        </div>
    )
}

export default Formulario;