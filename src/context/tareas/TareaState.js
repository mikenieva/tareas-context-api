import React, { useReducer } from 'react'
import TareaReducer from './TareaReducer'
import TareaContext from './TareaContext'

import {
    FORMULARIO_TAREAS,
    OBTENER_TAREAS
} from './../../types'

export default function TareaState (props) {

    // ESTAMOS GENERANDO LOS DATOS INICIALES
    const initialState = {
        tareas: [
            {id:1, nombre: "Terminar el backend"},
            {id:2, nombre: "Terminar el frontend"}
        ]
    }

    // GENERAR EL VÍNCULO DE LOS REDUCERS CON EL ESTADO INICIAL 

    const [state, dispatch] = useReducer(TareaReducer, initialState)

    // FUNCIONES DE DISPATCH
    const obtenerTareas = () => {
        dispatch({
            type: OBTENER_TAREAS,
            // payload: 
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )


}