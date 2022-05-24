import { ADD_FAVORITO, DELETE_FAVORITO, ES_FAVORITO, LOAD_FAVORITOS } from "../actions/Favoritos.action";

import Favorito from '../../models/Favorito';

const initialState = {
    favoritos: [],
    esFavorito: null,
}

const FavoritosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITO:
            const newFavorito = new Favorito(
                action.payload.id.toString(),
                action.payload.idProducto,
                action.payload.idCategoria,
                action.payload.NombreProducto,
                action.payload.NombreCategoria,
                action.payload.Uso,
                action.payload.Entrega,
                action.payload.Precio,
                action.payload.Imagen
            )
            return {
                ...state, 
                favoritos: state.favoritos.concat(newFavorito)
            }
        case LOAD_FAVORITOS:
            return {
                ...state,
                favoritos: action.favoritos.map(item => new Favorito(
                    item.id.toString(),
                    item.idProducto,
                    item.idCategoria,
                    item.NombreProducto,
                    item.NombreCategoria,
                    item.Uso,
                    item.Entrega,
                    item.Precio,
                    item.Imagen
                ))
            }
        case DELETE_FAVORITO:      
            const values = state.favoritos.filter( item => item.id !== action.id);
            return {
                ...state,
                favoritos: values,
            }

        
        default:
            return state
    }
}

export default FavoritosReducer;
