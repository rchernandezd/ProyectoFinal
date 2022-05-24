
export const SELECT_PRODUCTO = 'SELECT_PRODUCTO';
export const FILTRO_PRODUCTO = 'FILTRO_PRODUCTO';

export const selectProducto = (id) => ({
    type: SELECT_PRODUCTO,
    ProductoID: id
})

export const filtroProducto = (id) => ({
    type: FILTRO_PRODUCTO,
    CategoriaID: id
})

