import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { Ionicons } from "@expo/vector-icons";
import LocationSelectorComp from './LocationSelectorComp.js';
import color from '../constants/color.js';

const EmprendedorDetalleComp = ({ item }) => {
    // const [ location, setLocation ] = useState('');
    // const handlerLocation = loc => setLocation(loc);

    return (
        <View>
            <View style={{flexDirection: 'row', backgroundColor: color.blanco, marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 10}}>
                <Image
                    source={item.imagenEmprendedor}
                    style={{ width: 120, height: 120, alignSelf: 'center', margin: 10 }}/>
                <Text style={{marginTop:60, color: color.Azul, fontWeight: 'bold'}}>{item.nombreEmprendedor}</Text>
            </View>
            <View style={{backgroundColor: color.blanco, marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 10}}>
                <Text style={{margin: 10, color: color.Azul}}>{item.descripcion}</Text>
            </View>
            <View style={{backgroundColor: color.blanco, marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name='location-outline' size={25} color={color.Naranjo} /> 
                    <Text style={{alignSelf: 'center', color: color.Azul, paddingLeft: 10}}>{item.direccion}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Ionicons name='mail-outline' size={25} color={color.Naranjo} /> 
                    <Text style={{alignSelf: 'center', color: color.Azul, paddingLeft: 10}}>{item.mail}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Ionicons name='phone-portrait-outline' size={25} color={color.Naranjo} /> 
                    <Text style={{alignSelf: 'center', color: color.Azul, paddingLeft: 10}}>{item.celular}</Text>
                </View>
            </View>
            <View style={styles.cuadroMapa}>
                <LocationSelectorComp DatosEmprendedor={item}/>
            </View>
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
    descProd: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
    },
    cuadroMapa: {
        marginTop: 40,
    }
});

export default EmprendedorDetalleComp;