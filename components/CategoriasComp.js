import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import color from '../constants/color.js';
import react from 'react';

const CategoriasComp = ({ item, onSelected }) => {


    return (
        /*<View style={styles.imagenCategoria}>   
            <TouchableOpacity onPress={() => onSelected(item)}>
                <View>
                    <Text>{item.nombreCategoria}</Text>
                </View>
            </TouchableOpacity>
        </View>*/

        <View style={[styles.cuadroExterior, { backgroundColor: "#FFFFFF" }]}> 
            <TouchableOpacity onPress={() => onSelected(item)}>
                <View style={styles.cuadroInterior}>
                    <Image
                        source={item.imagenCatProd}
                        style={{ width: 100, height: 100, alignSelf: 'center' }}/>
                    </View>
                    <Text style={styles.categoria}>{item.nombreCategoria}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    cuadroExterior: {
        //flex: 1,
        //shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 10,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 10,
    },
    cuadroInterior: {
        //width: 95,
        //height: 110,
        backgroundColor: '#FFFFFF',
        margin: 10,
    },
    categoria: {
        fontSize: 14,
        fontWeight: 'bold',
        color: color.TextoAzul,
        alignSelf: 'center'
    },
});

export default CategoriasComp;