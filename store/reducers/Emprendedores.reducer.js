import {EMPRENDEDORESDATA} from "../../data/EmprendedoresData";
import { SELECT_EMPRENDEDOR } from "../actions/Emprendedores.action";

const initialState = {
    emprendedores: EMPRENDEDORESDATA,
    filtroEmprendedor: [],
    seleccionado: null
}

const EmprendedoresReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_EMPRENDEDOR:
            return {
                ...state, seleccionado: state.emprendedores.find(emprendedor => emprendedor.id === action.EmprendedorID)
            }
        default:
            return state
    }
}

export default EmprendedoresReducer;