import { FlatList, StyleSheet } from 'react-native';

import { EMPRENDEDORESDATA } from '../data/EmprendedoresData';
import EmprendedoresComp from '../components/EmprendedoresComp';
import React from 'react';
import { useSelector } from 'react-redux';

function EmprendedoresScreen({ navigation, route }) {

    //console.log(route.params.categoriaID);
    const Emprendedores = EMPRENDEDORESDATA.filter(Producto => Producto.idCategoria === route.params.categoriaID);

    
    const handleSelectedEmprendedor = (item) => {
        navigation.navigate('DetalleProducto', {
            EmprendedorID: item.id,
            nombre: item.nombreEmprendedor,
        });
    }

    const renderEmprendedoresItem = ({ item }) => (
        <EmprendedoresComp item={item} onSelected={handleSelectedEmprendedor}/>
    );

    return (
        <FlatList
            data={Emprendedores}
            keyExtractor={item => item.id}
            renderItem={renderEmprendedoresItem}
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

export default EmprendedoresScreen;