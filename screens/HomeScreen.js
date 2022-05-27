import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import color from '../constants/color';
import { selectUsuario } from '../store/actions/Usuarios.action';
import { signin } from '../store/actions/Auth.action';
import variables from '../constants/variables';

function HomeScreen({navigation}) {
   
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    
        // const sesionActiva = useSelector(state => state.auth.sesionActiva);
        // if (sesionActiva)
        // {
        //     navigation.navigate('BusquedasPorCategoria', {
        //         nombre: 'Almacen Vecino',
        //     });
        // }

        // const messageError = useSelector(state => state.auth.messageError);
        // console.log('messageError: ' + messageError);


    useEffect(() => {
        if (error) {
            Alert.alert('A ocurrido un error', error, [{ text: 'OK'}]);
        }
        setError(null);
    },[error]);

    // useEffect(() => {
    //     if (messageError!==null) {
    //         Alert.alert('A ocurrido un error', messageError, [{ text: 'OK'}]);
    //     }
    // },[messageError]);

    const handlerSignIn = async () => {
        setError(null);
        try 
        {
            await dispatch(signin(email, password))
            console.log('Finalizo el Login')
            dispatch(selectUsuario(email))
            
            // .then(() => {
            //     const DatosUsuarioAutenticado = useSelector(state => state.usuarios.usuarioAutenticado)
            // }) 
            //console.log('oki');
            // const DatosUsuarioAutenticado = useSelector(state => state.usuarios.usuarioAutenticado);
            // console.log('NombreUsuario: ' +  DatosUsuarioAutenticado.nombre)
            // dispatch(selectColegio(DatosUsuarioAutenticado.id))
        } catch(e) {
            console.log('noki: ' + e.message);
            setError(e.message);
        }
    }

    const handlerPass = (text) => {
        setPass(text);
    }

    const handlerEmail = (text) => {
        setEmail(text);
    }

    const handleSelectedIngresar = () => {
        //dispatch(loadInvitado(true));
        // navigation.navigate('HomeShop', {
            navigation.navigate('BuscarColegio', {
                nombre: '',
        });
    }

    const handlerSelectedCrearCuenta = () => {
        navigation.navigate('Registrar', {
            nombre: '',
        });
    }

  return (
    <View style={styles.screen}>
        <View style={styles.containerSuperior}>
            <Image
                // source={variables.logo}
                // style={{ width: 370, height: 180, marginTop:20 }}/>
                source={variables.logo}
                style={{ width: 220, height: 220 }}/>
        </View>
        <View style={styles.containerInferior}>
            <View>
                <View style={{ flexDirection: 'row', marginEnd: 20, justifyContent: 'space-between', marginTop:10}}>
                    <Text style={styles.textoBienvenido}>Bienvenido</Text>
                    {/* <Image
                        source={require("../assets/Ubicacion.png")}
                        style={{ width: 25, height: 25, left:35, padding: 10 }}/>
                    <Text style={{color: color.TextoNaranjo}}>Almacen Vecino</Text> */}
                </View>
                <TextInput placeholder="Ingresa tu email...." style={styles.input} onChangeText={handlerEmail}></TextInput>
                <TextInput placeholder="Ingresa tu contraseña...." style={styles.input} secureTextEntry onChangeText={handlerPass}></TextInput>
                <TouchableOpacity onPress={handlerSignIn}>
                    <View style={styles.BtnContainer}>
                        <Text style={styles.title}>Ingresar</Text>
                    </View>
                </TouchableOpacity>
                <Text style={[styles.dato, { fontWeight: 'bold'}]}>¿Olvidaste tu Contraseña?</Text>
                {/* <TextInput placeholder="Buscar almacen..." style={styles.input}></TextInput> */}
            </View>
            <View style={styles.linea}></View>
            <View style={styles.cuadroInferior}>
                <Text style={styles.dato}>¿No tienes cuenta?</Text>
                <TouchableOpacity onPress={handlerSelectedCrearCuenta}>
                    <Text style={[styles.dato, { fontWeight: 'bold'}]}>Crear una cuenta</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={handleSelectedIngresar}>
                    <View style={styles.BtnContainer}>
                        <Text style={styles.title}>Ingresar como invitado</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>    
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 1,
        flexDirection: "column",
    },
    cuadroInferior: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    linea: {
        width: 370,
        borderWidth: 1,
        borderColor: color.GrisClaro,
        margin: 10,
    },
    dato: {
        color: color.Celeste,
        fontSize: 13,
        textAlign: 'center',
        margin: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFFFFF'
    },
    BtnContainer: {
        backgroundColor: color.Celeste,
        height: 40,
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
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
    textoColegio: {
        color: color.TextoGris,
        fontSize: 22,
        left: 60,
        marginBottom: 15,
    },
    input: {
        width: 320,
        height: 50,
        marginTop: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 0,
        backgroundColor: color.GrisClaro,
        padding: 3,
        //margin: 20,
        left: 30,
    },
    botonIngresar: {
        width: 240,
        height: 50,
        fontSize: 20,
    }
});


export default HomeScreen;