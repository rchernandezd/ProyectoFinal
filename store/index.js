import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/Auth.reducer";
import BeneficiosReducer from "./reducers/Beneficios.reducer";
import CategoriasProductosReducer from "./reducers/CategoriasProductos.reducer";
import ColegiosReducer from "./reducers/Colegios.reducer";
import EmprendedoresReducer from "./reducers/Emprendedores.reducer";
import FavoritosReducer from "./reducers/Favoritos.reducer";
import ProductosReducer from "./reducers/Productos.reducer";
import UsuariosReducer from "./reducers/Usuarios.reducer";
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    categorias: CategoriasProductosReducer,
    productos: ProductosReducer,
    emprendedores: EmprendedoresReducer,
    favoritos: FavoritosReducer,
    auth: AuthReducer,
    beneficios: BeneficiosReducer,
    usuarios: UsuariosReducer,
    colegios: ColegiosReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));