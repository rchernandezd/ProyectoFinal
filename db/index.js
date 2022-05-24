import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('BDFavoritos.db');

export const init = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS TBL_Favoritos (id INTEGER PRIMARY KEY NOT NULL, idProducto INTEGER NOT NULL, idCategoria INTEGER NOT NULL, NombreProducto TEXT NOT NULL, NombreCategoria TEXT NOT NULL, Uso TEXT NOT NULL, Entrega TEXT NOT NULL, Precio INTEGER NOT NULL, imagen TEXT NOT NULL);",
            [],
            () => resolve(),
            (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const insertFavoritos = (idProducto, idCategoria, NombreProducto, NombreCategoria, Uso, Entrega, Precio, Imagen) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO TBL_Favoritos (idProducto, idCategoria, NombreProducto, NombreCategoria, Uso, Entrega, Precio, Imagen) values (?, ?, ?, ?, ?, ?, ?, ?);",
                [idProducto, idCategoria, NombreProducto, NombreCategoria, Uso, Entrega, Precio, Imagen],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
} 

export const fetchFavoritos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM TBL_Favoritos;",
                [],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}

export const delFavorito = (id) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            console.log(id);
            tx.executeSql(
                "DELETE FROM TBL_Favoritos WHERE id = ?",
                [id],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}