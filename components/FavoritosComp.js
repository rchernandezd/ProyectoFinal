import { Alert, Image, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import color from '../constants/color.js';
import react from 'react';

const FavoritosComp = ({ item, onDeleteFavorito }) => {
    const handlerDeleteFavorito = () => {
        Alert.alert(
            "Favorito",
            "Desea Eliminar el favorito?",
            [
                {
                text: "NO",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "SI", onPress: () => { console.log("Delete Pressed"); onDeleteFavorito(); }}
            ]        
        )
    }

    return (
    <View style={[styles.cuadroExterior, { backgroundColor: "#FFFFFF" }]}> 
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Ionicons style={styles.Favorito}  name="heart" onPress={handlerDeleteFavorito} size={25} color={color.Naranjo} />
                <View style={styles.imagenProducto}>
                    <Image
                            source={item.Imagen}
                            style={{ width: 100, height: 100, alignSelf: 'center' }}/>
                        <Text>IMAGEN: {item.Imagen}</Text>
                </View>
                <View>
                    <Text style={styles.descProd}>{item.NombreProducto}</Text>
                    <Text style={styles.nuevo}>{item.Uso}</Text>
                    <Text style={styles.tipoEntrega}>{item.Entrega}</Text>
                    <Text style={styles.precio}>{item.Precio}</Text>

                </View>
            </View>
    </View>
    )
};

const styles = StyleSheet.create({
    cuadroExterior: {
        flex: 1,
        //height: 300,
        //borderWidth: 1,
        //borderColor: '#283693',
        //backgroundColor: 'red',
    },
    Favorito: {
        left: 105,
        position: 'absolute',
        zIndex: 1,
    },
    CuadroDetalle: {
        backgroundColor: 'blue',
        marginLeft: 80,
        borderWidth: 1,
        borderColor: 'blue',
    },
    imagenProducto: {
        width: 110,
        height: 115,
        backgroundColor: color.GrisClaro,
        margin: 10,
        alignContent: 'center',
    },
    descProd: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
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
        width: 160,
        height: 170,
        backgroundColor: '#EEF3F4',
        margin: 10
    },
});

export default FavoritosComp;