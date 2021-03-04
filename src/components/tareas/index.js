import React, {useContext} from 'react'

import TareaContext from './../../context/tareas/TareaContext'

export default function Tareas() {

    const ctx = useContext(TareaContext)
    console.log(ctx)

    return (
        <div>
            Hola soy una lista de tareas
            {
                ctx.tareas.map((e, i) => {
                    return(
                        <p key={i}>
                            {e.id} - {e.nombre}
                        </p>
                    )
                })
            }
        </div>
    )
}
