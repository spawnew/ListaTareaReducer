
import { useState } from 'react'
const Formulario = ({ obtenerTareas }) => {

    const [form, setForm] = useState({ tarea: "" })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
      
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