import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import ProductoDetalleComp from '../components/ProductoDetalleComp';
import React from 'react';
import { useSelector } from 'react-redux';

//import { PRODUCTODETALLEDATA } from '../data/ProductoDetalleData';


function DetalleProductoScreen({ navigation, route }) {

    //const Productos = PRODUCTODETALLEDATA.filter(Producto => Producto.id === route.params.productoID);
    const Producto = useSelector(state => state.productos.seleccionado)

    //console.log("DETALLE PRODUCTO: " + Producto.nombreProducto + " " + Producto.id + " " + Producto.uso)

    // const handleSelectedProductoDetalle = (item) => {
    //     navigation.navigate('DetalleProducto', {
    //         productoID: item.id,
    //         nombre: item.nombreProducto,
    //     });
    // }


    return (
        // <FlatList
        //     data={Producto}
        //     keyExtractor={item => item.id}
        //     renderItem={renderProductoDetalleItem}
        // />
        <ProductoDetalleComp item={Producto}/>

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

export default DetalleProductoScreen;