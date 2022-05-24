import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import color from '../constants/color';

const BeneficiosComp = ({ item, onSelected }) => {
    return(
        <View style={[styles.cuadroExterior, { backgroundColor: "#FFFFFF" }]}> 
            <TouchableOpacity onPress={() => onSelected(item)}>
                <View style={styles.cuadroInterior}>
                    <Image
                        source={item.imagen}
                        style={{ width: 75, height: 75, alignSelf: 'center' }}/>
                </View>
                <Text style={styles.nombreEmprendedor}>{item.nombreBeneficio}</Text>
                <Text style={styles.categoria}>{item.beneficio}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    cuadroExterior: {
        flex: 1,
        height: 150,
        width: 120,
        //borderWidth: 5,
        //borderColor: '#283693',
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 10,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 10,
    },
    cuadroInterior: {
        backgroundColor: '#FFFFFF',
        margin: 10,
        //width: 100,
    },
    nombreEmprendedor: {
        fontSize: 14,
        fontWeight: 'bold',
        color: color.TextoAzul,
        alignSelf: 'center'
    },
    categoria: {
        left: 5,
        fontSize: 10,
        color: color.TextoAzul,
    },
});

export default BeneficiosComp;