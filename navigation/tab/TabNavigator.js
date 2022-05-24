import { StyleSheet, Text, View } from "react-native";

import FavoritosNavigatorStack from '../favoritos/FavoritosNavigatorStack';
import { Ionicons } from "@expo/vector-icons";
import ShopNavigatorStack from "../shop/ShopNavigatorStack";
import color from "../../constants/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerMode: 'float',
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "ShopTab") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "FavoritosTab") {
                        iconName = focused ? "heart" : "heart-outline";
                    }
                    return <Ionicons name={iconName} size={25} color={color} />
                },
                tabBarActiveTintColor: color.Naranjo,
                tabBarInactiveTintColor: color.GrisOscuro,

            })}
            initialRouteName="ShopTab">
            <BottomTabs.Screen
                name="ShopTab"
                component={ShopNavigatorStack}
            />
             <BottomTabs.Screen
                name="FavoritosTab"
                component={FavoritosNavigatorStack}
            />
        </BottomTabs.Navigator>
    )
};

const styles = StyleSheet.create({
    tabBar: {
        //shadowColor: '#7f5df0',
        //shadowOffset: { width: 0, height: 10 },
        //shadowOpacity: 0.25,
        //shadowRadius: 0.25,
        //elevation: 5,
        position: 'absolute',
        //bottom: 15,
        //left: 20,
        //right: 20,
        //borderRadius: 15,
        height: 45,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TabNavigator;