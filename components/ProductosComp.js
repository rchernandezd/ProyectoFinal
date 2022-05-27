import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { addFavorito, loadFavoritos } from '../store/actions/Favoritos.action';
import { useDispatch, useSelector } from 'react-redux';

import { Ionicons } from "@expo/vector-icons";
import color from '../constants/color';

const ProductosComp = ({ item, onSelected }) => {

    useEffect(() => {
        dispatch(loadFavoritos());
    },[])


    const dispatch = useDispatch();

    const favoritos = useSelector(state => state.favoritos.favoritos);

    // console.log('Favoritos =' + favoritos[0].idProducto + favoritos[0].NombreProducto); 
    // console.log('Favoritos =' + favoritos[1].idProducto + favoritos[1].NombreProducto);
    // console.log('Item ID = ' + item.id + item.nombreProducto);

    const esFav = favoritos.findIndex(fav => fav.idProducto === parseInt(item.id));
    //console.log('esFav: ' + esFav);
    
    const handlerAddFavorito = () => {
        const AddFav = favoritos.findIndex(fav => fav.idProducto === parseInt(item.id))
        AddFav === -1 ? 
            dispatch(addFavorito(item.id, item.idCategoria, item.nombreProducto, item.nombreCategoria, item.uso, item.entrega, item.precio, item.imagen))
            :
            Alert.alert("Producto ya esta agregado como Favorito");
        dispatch(loadFavoritos());
    }

    return(
        <View style={[styles.cuadroExterior, { backgroundColor: "#FFFFFF" }]}> 
                { esFav === -1 ?
                    <Ionicons style={styles.Favorito} onPress={handlerAddFavorito} name="heart-outline" size={25} color={color.Naranjo} /> :
                    <Ionicons style={styles.Favorito} onPress={handlerAddFavorito} name="heart" size={25} color={color.Naranjo} />
                }
               
                <View style={styles.cuadroInterior}>               
                    <TouchableOpacity onPress={() => onSelected(item)}>

                            {/* <View style={styles.imagenProducto}> */}
                                {/* <Text>{item.nombreProducto}</Text> */}
                                <Image
                                    source={item.imagen}
                                    style={{ width: 100, height: 130, alignSelf: 'center' }}/>
                          {/* </View> */}
                    </TouchableOpacity>
                </View>
            {/* <Button title="Agregar a Favoritos" onPress={handlerAddFavorito}/> */}
            <Text style={styles.descProd}>{item.nombreProducto}</Text>
            <Text style={styles.nuevo}>{item.uso}</Text>
            <Text style={styles.tipoEntrega}>{item.entrega}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cuadroExterior: {
        flex: 1,
        //height: 300,
        //borderWidth: 1,
        //borderColor: '#283693',
    },
    Favorito: {
        left: 140,
        position: 'absolute',
        zIndex: 1,
    },
    imagenProducto: {
        width: 137,
        height: 145,
        backgroundColor: "#FFFFFF",
        margin: 10,
        alignContent: 'center',
    },
    descProd: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
    },
    nuevo: {
        color: color.TextoAzul,
        fontSize: 12,
        marginLeft: 10,
        paddingTop: 10,
    },
    tipoEntrega: {
        color: color.TextoAzul,
        fontSize: 12,
        marginLeft: 10,
    },
    precio: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        //alignSelf: 'center',
        paddingLeft: 55,
        paddingBottom: 10,
    },
    cuadroInterior: {
        width: 140,
        height: 150,
        backgroundColor: '#EEF3F4',
        margin: 10
    },
});

export default ProductosComp;