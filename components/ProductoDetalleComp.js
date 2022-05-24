import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import color from '../constants/color.js';

const ProductoDetalleComp = ({ item }) => {
    return (
        <View>
            <View style={styles.cuadroInterior}>
                <View style={styles.imagenProducto}>
                    <Image source={item.imagen} style={{ width: '100%', height: '100%', alignSelf: 'center' }}/>
                </View>
                <View style={{ flexDirection: 'row', marginEnd: 20, justifyContent: 'space-evenly', marginTop:10}}>
                    <Text style={{color: color.Azul}}>{item.nombreCategoria}</Text>
                    <Text>Publicado hace 15 días</Text>
                </View>
                <Text style={styles.nombreProducto}>{item.nombreProducto}</Text>
            </View>
            <View style={styles.cuadroInferior}>
                <Text style={styles.precio}>{item.precio}</Text>
                <Text style={styles.nuevo}>{item.uso}</Text>
                <Text style={styles.tipoEntrega}>{item.entrega}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginEnd: 20, margin:10}}>
                <Image source={require('../assets/ImagenRostroMujer.png')} style={{ width: 70, height: 70 }}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{color: color.Naranjo}}>Paola</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10}}>
                        <Ionicons name='phone-portrait-outline' size={25} color={color.Naranjo} /> 
                        <Text style={{color: color.Naranjo}}>912345678</Text>
                    </View>
                </View>
                <TouchableOpacity style={{alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{backgroundColor: color.Naranjo, color: color.blanco, width: 150, height: 40, padding: 8, paddingLeft: 40, marginLeft: 20, borderRadius: 10}}>Ir al perfil</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
                    <Text style={{backgroundColor: color.Azul, color: color.blanco, width: 200, height: 40, padding: 8, paddingLeft: 40, marginLeft: 20, borderRadius: 10}}>Contactar al vendedor</Text>
            </TouchableOpacity>
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
    cuadroInferior: {
        width: 389,
        height: 142,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 10,  
        alignSelf: 'center',
    },
    nombreProducto: {
        color: color.Naranjo,
        fontWeight: 'bold',
        fontSize: 16,
        margin: 20,
        alignSelf: 'center',
    },
    imagenProducto: {
        width: 229,
        height: 217,
        backgroundColor: "#FFFFFF",
        margin: 10,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: 'red',
        //borderWidth: 2,
    },
    descProd: {
        color: color.Naranjo,
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
    },
    nuevo: {
        color: color.Azul,
        fontSize: 12,
        paddingLeft: 50,
    },
    tipoEntrega: {
        color: color.Azul,
        fontSize: 12,
        paddingLeft: 50,
    },
    precio: {
        color: color.Naranjo,
        fontWeight: 'bold',
        fontSize: 16,
        //alignSelf: 'center',
        paddingLeft: 30,
        padding: 20,
    },
    cuadroInterior: {
        width: 389,
        height: 330,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 10,
        alignSelf: 'center',
    },
});

export default ProductoDetalleComp;