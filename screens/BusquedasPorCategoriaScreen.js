import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import BeneficiosComp from '../components/BeneficiosComp.js';
import CategoriasComp from '../components/CategoriasComp.js';
import EmprendedoresComp from '../components/EmprendedoresComp.js';
import React from 'react';
import color from '../constants/color.js';
import { selectCategoriaProducto } from "../store/actions/CategoriasProductos.action";
import { selectEmprendedor } from '../store/actions/Emprendedores.action';
import { selectUsuario } from '../store/actions/Usuarios.action';

//import { SafeAreaView } from 'react-native-safe-area-context';





//import { EMPRENDEDORESDATA } from '../data/EmprendedoresData.js';

//import CategoriasEmprendedorComp from '../components/CategoriasEmprendedorComp';


//import { CATEGORIASEMPRENDEDORDATA } from '../data/CategoriasEmprendedorData';
//import { CATEGORIASPRODUCTODATA } from '../data/CategoriasProductoData';


function BusquedasPorCategoriaScreen({navigation}) {

    const categoriasProducto = useSelector(state => state.categorias.categorias);
    const emprendedores = useSelector(state => state.emprendedores.emprendedores);
    const beneficios = useSelector(state => state.beneficios.beneficios);
    const usuarios = useSelector(state => state.usuarios.usuarios);

    const dispatch = useDispatch();
    // const email = useSelector(state => state.auth.user);
    // console.log('email: ' +  email);
    // dispatch(selectUsuario(email));
  
    //console.log('beneficios: ' + beneficios[0].nombreBeneficio);

    const sesionActiva = useSelector(state => state.auth.sesionActiva);
    console.log('Sesion Activa: ' + sesionActiva);

    // const DatosUsuarioAutenticado = useSelector(state => state.usuarios.usuarioAutenticado);
    // console.log('Datos Usuario ' + DatosUsuarioAutenticado.id);

   

    // const handleSelectedProductos = () => {
    //     navigation.navigate('Productos', {
    //         nombre: 'Almacen Vecino',
    //     });
    // }

    const handleSelectedCategoria = (item) => {
        //console.log("CategoriasScreen: " + item.idCategoria)
        dispatch(selectCategoriaProducto(item.idCategoria))
        //navigation.navigate('Productos', {
        //    categoriaID: item.idCategoria,
        //    nombre: item.nombreCategoria,
           // });
        navigation.navigate('Productos', {
            nombre: item.nombreCategoria
        })

    }

    const handleSelectedEmprendedor = (item) => {
        dispatch(selectEmprendedor(item.id))
        navigation.navigate('EmprendedorDetalle', {
            //EmprendedorID: item.id,
            nombre: item.nombreEmprendedor,
        });
    }

    const renderCategoriasItem = ({ item }) => (
        <CategoriasComp item={item} onSelected={handleSelectedCategoria}/>
    );

    const renderEmprendedoresItem = ({ item }) => (
        <EmprendedoresComp item={item} onSelected={handleSelectedEmprendedor}/>
    );

    const renderBeneficiosItem = ({ item }) => (
        <BeneficiosComp item={item}/>
    );

  return (
    <SafeAreaView>
        <ScrollView style={styles.screen}>
            <View style={[styles.container, {height: 10}]}>
                {/* <Text>SLIDER</Text> */}
            </View>
            <View style={[styles.container]}>
                {/* <TextInput style={styles.input} placeholder='Buscar productos....'/> */}
                <Text style={styles.texto}>CATEGORIAS DE PRODUCTOS MAS POPULARES</Text>
                <FlatList
                    data={categoriasProducto}
                    keyExtractor={item => item.idCategoria}
                    renderItem={renderCategoriasItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={[styles.container]}>
                {/* <TextInput style={styles.input} placeholder='Buscar emprendedores....'/> */}
                <Text style={styles.texto}>EMPRENDEDORES</Text>
                <FlatList
                    data={emprendedores}
                    keyExtractor={item => item.id}
                    renderItem={renderEmprendedoresItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.container}>
            <Text style={styles.texto}>BENEFICIOS</Text>
                {(sesionActiva) 
                    ?   <View>
                            <FlatList
                                data={beneficios}
                                keyExtractor={beneficios => beneficios.id}
                                renderItem={renderBeneficiosItem}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false} />
                        </View>
                    :   <View style={{width: 372, height: 114, backgroundColor: color.blanco, borderRadius: 10, marginLeft: 10, marginRight: 10}}>
                            <Text style={{alignSelf: 'center', color: color.Azul, fontWeight: 'bold', textAlign: 'center', paddingTop: 40}}>Beneficios solo disponibles para usuarios registrados</Text>
                        </View> 
                }
            </View>
        </ScrollView>
    </SafeAreaView>

  );
}

{/* <BeneficiosCarrusel besneficios={beneficios} render={renderBeneficiosItem}/> */}

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        //flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        },
    container: {
        //flex: 1,
        backgroundColor: color.GrisClaro,
        padding: 10,
        margin: 5,
    },
    input: {
        width: 300,
        height: 35,
        backgroundColor: "#EEF3F4",
        padding: 2,
    },
    texto: {
        color: color.TextoNaranjo,
        fontWeight: 'bold',      
        fontSize: 16,
        marginBottom: 5,  
    }
});


export default BusquedasPorCategoriaScreen;