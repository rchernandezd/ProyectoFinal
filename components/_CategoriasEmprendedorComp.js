import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import color from '../constants/color';

const CategoriasEmprendedorComp = ({ item, onSelected }) => {
    return(
        <View style={[styles.cuadroExterior, { backgroundColor: "#FFFFFF" }]}> 
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.cuadroInterior}>
                <View style={styles.imagenProducto}>
                    <Text>{item.nombreCategoria}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenCategoria: {
        flex: 1,
        width: 95,
        height: 92,
        backgroundColor: color.GrisClaro,
        padding: 10,
        margin: 10,
        //alignContent: 'center',
    },
    cuadroExterior: {
        flex: 1,
        //height: 300,
        //borderWidth: 1,
        //borderColor: '#283693',
    },
    imagenProducto: {
        width: 85,
        height: 80,
        backgroundColor: "#FFFFFF",
        margin: 5,
        //alignContent: 'center',
    },
    cuadroInterior: {
        width: 95,
        height: 92,
        backgroundColor: '#EEF3F4',
        margin: 10
    },
});

export default CategoriasEmprendedorComp;