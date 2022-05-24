import { FlatList, StyleSheet } from 'react-native';
import React, {useEffect} from 'react';
import { filtroProducto, selectProducto } from '../store/actions/Productos.action';
import { useDispatch, useSelector } from 'react-redux';

import ProductosComp from '../components/ProductosComp';

//import { loadFavoritos } from '../store/actions/Favoritos.action';

//import { PRODUCTOSDATA } from '../data/ProductosData';


function ProductosScreen({ navigation, route }) {

    const dispatch = useDispatch()
    const Productos = useSelector(state => state.productos.filtroProducto)
    const Categorias = useSelector(state => state.categorias.seleccionado)

    //const Productos = PRODUCTOSDATA.filter(Producto => Producto.idCategoria === route.params.categoriaID);
    
    useEffect(() => {
        //console.log("Use Effect ProductosScreen: " + Categorias.idCategoria);
        dispatch(filtroProducto(Categorias.idCategoria))
    }, [])

    const handleSelectedProducto = (item) => {
        //console.log("ProductosScreen Producto Seleccionado: " + item.id);
        dispatch(selectProducto(item.id))
        navigation.navigate('DetalleProducto', {
        //    productoID: item.id,
             nombre: item.nombreProducto,
        });
    }

    const renderProductosItem = ({ item }) => (
        <ProductosComp  item={item} onSelected={handleSelectedProducto}/>
    );

    return (
        <FlatList
            data={Productos}
            keyExtractor={ item => item.id }
            renderItem={renderProductosItem}
            numColumns={2}
        />
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 10,
        margin: 5,
        flexDirection: 'row',
    }
});

export default ProductosScreen;