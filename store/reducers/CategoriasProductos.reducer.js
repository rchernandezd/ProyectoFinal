import { CATEGORIASPRODUCTODATA } from "../../data/CategoriasProductoData";
import { SELECT_CATEGORIA_PRODUCTO } from "../actions/CategoriasProductos.action";

const initialState = {
    categorias: CATEGORIASPRODUCTODATA,
    seleccionado: null
}

const CategoriasProductosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORIA_PRODUCTO:
            //console.log("SELECT_CATEGORIA_PRODUCTO - acction:  " + action.categoriaID + " State idCategoria: " + state.categorias[0].idCategoria + "-" + state.categorias[1].idCategoria);
            const IndexCategoriaProducto = state.categorias.findIndex(cat => cat.idCategoria === action.categoriaID);
            if (IndexCategoriaProducto === -1) return state
            return {...state, seleccionado: state.categorias[IndexCategoriaProducto]};
        default:
            return state;
    }
}

export default CategoriasProductosReducer;