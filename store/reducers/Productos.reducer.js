import { FILTRO_PRODUCTO, SELECT_PRODUCTO } from "../actions/Productos.action";

import {PRODUCTOSDATA} from "../../data/ProductosData";

const initialState = {
    productos: PRODUCTOSDATA,
    filtroProducto: [],
    seleccionado: null
}

const ProductosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCTO:
            return {
                ...state, 
                seleccionado: state.productos.find(producto => producto.id === action.ProductoID)
            }
        case FILTRO_PRODUCTO:
            //console.log("FILTRO_PRODUCTO: " + action.CategoriaID);
            return {
                ...state,
                filtroProducto: state.productos.filter(producto => producto.idCategoria === action.CategoriaID)
            }
            
        default:
            return state
    }
}

export default ProductosReducer;