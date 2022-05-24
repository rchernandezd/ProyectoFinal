import { ERROR } from '../actions/Auth.action'
import { INGRESAR_INVITADO } from '../actions/Auth.action'
import { SIGNIN } from '../actions/Auth.action'
import { SIGNUP } from '../actions/Auth.action'

const initialState = {
    token: null,
    user: null,
    messageError: null,
    ingresarInvitado: false,
    sesionActiva: false
}

const AuthReducer = (state = initialState, action) => {    
    switch (action.type) {
        case SIGNUP:
            console.log(SIGNUP);
            return {...state, token: action.token, user: action.user}
        case SIGNIN:
            console.log(SIGNIN);
            return {...state, token: action.token, user: action.user, sesionActiva: action.sesionActiva, ingresarInvitado: action.ingresarInvitado}
        case ERROR:
            console.log(ERROR);
            return {...state, messageError: action.messageError}
        case INGRESAR_INVITADO:
            console.log(INGRESAR_INVITADO);
            return {...state, ingresarInvitado: action.ingresarInvitado}
        default:
            return state
    }
}

export default AuthReducer;