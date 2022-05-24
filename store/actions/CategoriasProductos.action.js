export const SELECT_CATEGORIA_PRODUCTO = 'SELECT_CATEGORIA_PRODUCTO';

export const selectCategoriaProducto = (id) => ({
    type: SELECT_CATEGORIA_PRODUCTO,
    categoriaID: id
})