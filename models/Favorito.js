class Favorito {
    constructor(id, idProducto, idCategoria, NombreProducto, NombreCategoria, Uso, Entrega, Precio, Imagen) {
        this.id = id.toString();
        this.idProducto = idProducto;
        this.idCategoria = idCategoria;
        this.NombreProducto = NombreProducto;
        this.NombreCategoria = NombreCategoria;
        this.Uso = Uso;
        this.Entrega = Entrega;
        this.Precio = Precio;
        this.Imagen = Imagen;
    }
}

export default Favorito;

