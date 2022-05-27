import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { SearchBar } from 'react-native-elements';
import color from '../constants/color';
import { loadInvitado } from '../store/actions/Auth.action';
import variables from '../constants/variables';

function BuscarColegioScreen() 
{
    const [search, setSearch] = useState('');
    const [searchId, setSearchId] = useState('');
    const [searchImagen, setSearchImagen] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const dispatch = useDispatch();
    const colegios = useSelector(state => state.colegios.colegios);

    useEffect(() => {
        //setFilteredData(colegios);
        setMasterData(colegios);
    }, [])
    
    const searchFilter = (text) => {
       
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.nombre
                    ? item.nombre.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(masterData);
            setSearch(text);
        }
    }

    const renderViewItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {/* {item.id}
                {'.'} */}
                {item.nombre}
                </Text>
            </View>
        )
    }
    
    const itemSeparatorView = () => {
        return(
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: color.GrisClaro,
            }}/>
        )    
    }

    const getItem = (item) => {
        //alert('Id: ' + item.id + 'Nombre: ' + item.nombre);
        setSearch(item.nombre);
        setSearchId(item.id);
        setSearchImagen(item.imagen);
    }

    const handleSelectedIngresar = () => {
        console.log('colegio seleccionado: ' + search + searchId);
        if (searchId === '')
            { Alert.alert('Debe seleccionar'); }
        else
            { dispatch(loadInvitado(true, searchId, search, searchImagen)); } 
        // navigation.navigate('HomeShop', {
        //         nombre: '',
        // });
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerSuperior}>
                <Image
                    // source={variables.logo}
                    // style={{ width: 370, height: 180, marginTop:20 }}/>
                    source={variables.logo}
                    style={{ width: 220, height: 220 }}/>
            </View>
            <View style={styles.containerInferior}>
                <Text style={styles.textoBienvenido}>Bienvenido</Text>
                <View style={styles.container}>
                    <SearchBar
                        round
                        searchIcon={{size: 24}}
                        lightTheme
                        placeholder='Buscar almacen....'
                        containerStyle={styles.containerSearch}
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.inputSearch}
                        onChangeText={(text) => searchFilter(text)}
                        onClear={(text) => searchFilter('')}
                        value={search}
                    />
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={itemSeparatorView}
                        renderItem={renderViewItem}
                    />
                </View>
                <TouchableOpacity onPress={handleSelectedIngresar}>
                    <View style={styles.BtnContainer}>
                        <Text style={styles.title}>Ingresar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'blue',
    },
    containerSearch: {
        width: 320,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: color.Azul,
    },
    inputSearch: {
        fontSize: 14,
    },
    itemStyle: {
        padding: 10,
        color: color.Azul,
    },
    containerSuperior: {
        flex: 1,
        //backgroundColor: "#9E9E9E",
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
      },
    containerInferior: {
        //top: 200,
        flex: 2,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: "#FFFFFF",
        marginTop: 15,
    },
    textoBienvenido: {
        alignContent: 'center',
        left: 30,
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: color.TextoAzul,    
    },
    BtnContainer: {
        backgroundColor: color.Celeste,
        height: 40,
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFFFFF'
    },
    item: {
        //padding: 20,
        //marginVertical: 20,
        marginHorizontal: 16,
    },
    inputContainer: {
        width:300, 
        backgroundColor: color.GrisClaro, 
        alignSelf:'center',
        height: 40,
    },
});

export default BuscarColegioScreen;