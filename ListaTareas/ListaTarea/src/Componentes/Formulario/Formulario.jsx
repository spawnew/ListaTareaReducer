
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
        console.log(form)
        obtenerTareas(form)
        setForm({ tarea: "" }) // Limpiar el campo de entrada después de enviar
    }
    return (
        <div>


            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="tarea" value={form.tarea} placeholder='ingrese una tarea' >
                </input>
              

                <input type="submit" ></input>

            </form>


        </div>
    )
}

export default Formulario;