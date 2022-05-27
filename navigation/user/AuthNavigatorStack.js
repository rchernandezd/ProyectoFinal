import { Image, Platform, Text, View } from 'react-native';

import BuscarColegioScreen from '../../screens/BuscarColegioScreen';
import BusquedasPorCategoriaScreen from '../../screens/BusquedasPorCategoriaScreen';
import DetalleProductoScreen from '../../screens/DetalleProductoScreen';
import EmprendededorDetalleScreen from '../../screens/EmprendedorDetalleScreen';
import HomeScreen from '../../screens/HomeScreen';
import ImageHeaderComp from '../../components/ImageHeaderComp';
import ProductosScreen from '../../screens/ProductosScreen';
import React from 'react';
import RegistrarScreen from '../../screens/RegistrarScreen';
import color from '../../constants/color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigatorStack =  () => {


    return  (
        <Stack.Navigator 
            initialRouteName='Auth'
            screenOptions={{
                headerStyle: {backgroundColor: Platform.OS === 'android' ? color.blanco : ''},
                headerTintColor: Platform.OS === 'android' ? color.Azul : color.blanco,
                // headerTitle: (props) => (
                //     <Image style={{ width: 50, height: 50 }} source = {require('../../assets/BuhoSM.png')}/>
                //     <Text>Hola</Text>
                // ),
                //headerTitle: (props) => <ImageHeaderComp {...props} item='HOLA'/>,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen 
                name='Auth'
                component={HomeScreen} 
                options={{  
                    headerTitle: (props) => <ImageHeaderComp item=''/>,
                    title: 'Tu Almacen en Casa',
                }}              
            />
            <Stack.Screen 
                name='Registrar'
                component={RegistrarScreen}     
                options={({ route }) => ({
                    headerTitle: (props) => <ImageHeaderComp {...props} item={route.params.nombre}/>,
                    //title: 'Tu Almacen en Casa',
                })}             
            />
        
             <Stack.Screen 
                name='HomeShop'
                component={BusquedasPorCategoriaScreen}
                options={{ 
                    title: 'Tu Almacen en Casa',
                }}
            />      
            <Stack.Screen 
                name='BuscarColegio'
                component={BuscarColegioScreen}
                options={{ 
                    headerTitle: (props) => <ImageHeaderComp {...props} item=''/>,
                    //title: 'Tu Almacen en Casa',
                }}
            />         
            <Stack.Screen 
                name='Productos'
                component={ProductosScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            />
            <Stack.Screen 
                name='EmprendedorDetalle'
                component={EmprendededorDetalleScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            />
            <Stack.Screen 
                name='DetalleProducto'
                component={DetalleProductoScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigatorStack;