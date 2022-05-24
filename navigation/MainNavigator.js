import react, { useState } from "react";

import AuthNavigatorStack from "./user/AuthNavigatorStack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator';
import { useSelector } from 'react-redux';

const MainNavigator = () => {

    const sesionActiva = useSelector(state => state.auth.sesionActiva);
    const ingresarInvitado = useSelector(state => state.auth.ingresarInvitado);
    console.log('Sesion Activa: ' + sesionActiva);
    console.log('Invitado: ' + ingresarInvitado);

    return (
        <NavigationContainer>
            { ((ingresarInvitado) || (sesionActiva))
                ? <TabNavigator />
                : <AuthNavigatorStack/>
            }
        </NavigationContainer>

    )
}

export default MainNavigator;