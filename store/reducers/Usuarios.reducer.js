import { SELECT_USUARIO } from "../actions/Usuarios.action";
import { USUARIOSREGISTRADOSDATA } from "../../data/UsuariosRegistradosData";

const initialState = {
    usuarios: USUARIOSREGISTRADOSDATA,
    usuarioAutenticado: null,
}

const UsuariosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_USUARIO:
            console.log('SELECT_USUARIO')
            // const Usu=state.usuarios.find(usuario => usuario.email === action.email)
            // console.log('ImagenColegioAction: ' + Usu.imagenColegio)
            return { ...state, usuarioAutenticado: state.usuarios.find(usuario => usuario.email.toUpperCase().replace(" ", "") === action.email.toUpperCase().replace(" ", ""))  }
        default:
            return state
    }
}

export default UsuariosReducer;