import { Image, Platform } from 'react-native';

import BusquedasPorCategoriaScreen from '../../screens/BusquedasPorCategoriaScreen';
import DetalleProductoScreen from '../../screens/DetalleProductoScreen';
import EmprendededorDetalleScreen from '../../screens/EmprendedorDetalleScreen';
import ImageHeaderComp from '../../components/ImageHeaderComp';
import ProductosScreen from '../../screens/ProductosScreen';
import color from '../../constants/color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react from 'react';
import { useSelector } from 'react-redux';

//import EmprendedoresScreen from '../../screens/EmprendedoresScreen';

const Stack = createNativeStackNavigator();

const ShopNavigatorStack =  () => {

    return  (
    //<NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                //headerShown: false,
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? color.blanco : '',
                },
                headerTintColor: Platform.OS === 'android' ? color.Azul : color.blanco,
                // headerTitle: (props) => (
                //     <Image style={{ width: 50, height: 50 }} source = {require('../../assets/BuhoSM.png')}/>
                //),
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
             <Stack.Screen 
                name='Home'
                component={BusquedasPorCategoriaScreen}
                options={({ route }) => ({
                    headerTitle: (props) => <ImageHeaderComp {...props} item=''/>,
                    title: '',
                })}
            />            
            {/* <Stack.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                title: 'Tú Almacen en Casa'
                }}    
            />
            <Stack.Screen 
                name='BusquedasPorCategoria'
                component={BusquedasPorCategoriaScreen}
                options={({ route }) => ({
                    title: route.params.nombre,
                })}
            /> */}
            <Stack.Screen 
                name='Productos'
                component={ProductosScreen}
                options={({ route }) => ({
                    headerTitle: (props) => <ImageHeaderComp {...props} item={route.params.nombre}/>,
                    title: route.params.nombre,
                })}
            />
            <Stack.Screen 
                name='EmprendedorDetalle'
                component={EmprendededorDetalleScreen}
                options={({ route }) => ({
                    headerTitle: (props) => <ImageHeaderComp {...props} item={route.params.nombre}/>,
                    title: route.params.nombre,
                })}
            />
            <Stack.Screen 
                name='DetalleProducto'
                component={DetalleProductoScreen}
                options={({ route }) => ({
                    headerTitle: (props) => <ImageHeaderComp {...props} item={route.params.nombre}/>,
                    title: route.params.nombre,
                })}
            />
        </Stack.Navigator>
    //</NavigationContainer>
    )
}

export default ShopNavigatorStack;