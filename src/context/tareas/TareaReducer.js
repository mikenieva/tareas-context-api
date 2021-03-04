/* eslint-disable import/no-anonymous-default-export */
import {
    FORMULARIO_TAREAS,
    OBTENER_TAREAS
} from './../../types'

export default (state, action) => {
    switch(action.type){

        case OBTENER_TAREAS:
            return {
                ...state,
                tareas: [...state.tareas, { 
                    id:3, nombre:"Crear la base de datos"
                }]
            }

        default:
            return state
    }
}