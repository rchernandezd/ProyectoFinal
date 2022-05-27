import { delFavorito, fetchFavoritos, insertFavoritos } from "../../db";

export const ADD_FAVORITO = 'ADD_FAVORITO';
export const LOAD_FAVORITOS = 'LOAD_FAVORITOS';
export const DELETE_FAVORITO = 'DELETE_FAVORITO';
export const ES_FAVORITO = 'ES_FAVORITO';

export const addFavorito = (idProducto, idCategoria, NombreProducto, NombreCategoria, Uso, Entrega, Precio, Imagen) => {
    
    return async dispatch => {

        try {
            const result = await insertFavoritos(
                idProducto,
                idCategoria,
                NombreProducto,
                NombreCategoria,
                Uso,
                Entrega,
                Precio,
                Imagen
            )
            //console.log('Action: Imagen' + Imagen);
            dispatch({
                type: ADD_FAVORITO,
                payload: {id: result.insertId, idProducto, idCategoria, NombreProducto, NombreCategoria, Uso, Entrega, Precio, Imagen }
            })
        }
        catch (err) {
            console.log(err.message)
            throw err
        }
    }
}

export const loadFavoritos = () => {
    return async dispatch => {
        try {
            const result = await fetchFavoritos();
            //console.log('Action: fetchFavoritos: ' + result);
            dispatch({type: LOAD_FAVORITOS, favoritos: result.rows._array });
        }catch(err) {
            console.log(err.message);
            throw err;
        }
    }
}

export const deleteFavorito = (id) => {
    return async dispatch => {
        try {
            const result = await delFavorito(id);
            //console.log(result);
            dispatch({type: DELETE_FAVORITO, id});
        } catch(err) {
            throw err;
        }
    }
} 
