import { COLEGIOSDATA } from "../../data/ColegiosData";
import { SELECT_COLEGIO } from "../actions/Colegios.action";

const initialState = {
    colegios: COLEGIOSDATA,
    colegioUsuario: null,
}

const ColegiosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_COLEGIO:
            //const usuario = state.usuarios.find(usuario => usuario.email === action.email);
            return { ...state, colegioUsuario: state.colegios.find(colegio => colegio.id === action.idColegio)  }
        default:
            return state
    }
}

export default ColegiosReducer;