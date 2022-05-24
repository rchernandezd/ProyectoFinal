import FavoritosScreen from '../../screens/FavoritosScreen.js'
import ImageHeaderComp from '../../components/ImageHeaderComp.js';
import { Platform } from "react-native";
import color from "../../constants/color";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";

const Stack = createNativeStackNavigator();

const FavoritosNavigatorStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Favoritos"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? color.blanco : '',
                },
                headerTintColor: Platform.OS === 'android' ? color.Azul : color.blanco,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen
                name="Favoritos"
                component={FavoritosScreen}
                //options={{ title: 'Favoritos' }}
                options={({ route }) => ({
                    headerTitle: (props) => <ImageHeaderComp {...props} item='Favoritos'/>,
                    //title: 'Favoritos',
                })}
            />
        </Stack.Navigator>
    )
};

export default FavoritosNavigatorStack;