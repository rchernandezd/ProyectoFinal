import {Alert, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from "react";

import color from '../constants/color';
import { signup } from '../store/actions/Auth.action';
import {useDispatch} from 'react-redux';

function RegistrarScreen({ navigation, route }) {

    const title = 'REGISTRO',
        message = '¿Ya tienes tu cuenta?',
        messageAction = 'Ingresar',
        messageTarget = 'login';

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            Alert.alert('A ocurrido un error', error, [{ text: 'OK'}]);
        }
        setError(null);
    },[error]);

    const handlerSignUp = async () => {
        setError(null);
        console.log('Registrar: ' + email)
        try {
            await dispatch(signup(email, password));
            navigation.navigate('Auth', {
                //    productoID: item.id,
                    nombre: '',
                });
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

    return (
        <KeyboardAvoidingView
            behavior='height'
            style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                 <TextInput 
                    style={styles.input}
                    keyboarType="email-address"
                    autoCapitalize="none"
                     onChangeText={handlerEmail}
                    />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={handlerPass}
                    />
                {/* <Input
                    id="email"
                    label="Email"
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorText="Por favor ingrese un email valido"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />

                <Input
                    id="password"
                    label="Clave"
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={6}
                    autoCapitalize="none"
                    errorText="Por favor ingrese un password"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                /> */}
                <View style={styles.button}>
                    <Button
                    title="Registrarme"
                    color={color.Primario}
                    onPress={handlerSignUp}
                    />
                </View>
                <View style={styles.prompt}> 
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => console.log("Registrar")}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>

            </View> 
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        //fontFamily: 'OpenSansBold',
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    prompt: {
        alignItems: 'center'
    },
    promptMessage: {
        fontSize: 16,
        //fontFamily: 'OpenSans',
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        //fontFamily: 'OpenSansBold',
        color: color.Primario,
    },
    button: {
        backgroundColor: color.Primario,
        marginVertical: 20
    },
    label: {
        //fontFamily: "OpenSansBold",
        marginVertical: 8,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
});

export default RegistrarScreen;