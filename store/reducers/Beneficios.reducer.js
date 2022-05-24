import { BENEFICIOSDATA } from "../../data/BeneficiosData";

const initialState = {
    beneficios: BENEFICIOSDATA,
}

const BeneficiosReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default BeneficiosReducer;