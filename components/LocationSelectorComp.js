import * as Location from 'expo-location';

import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { useEffect, useState } from 'react';

import MapPreviewComp from '../components/MapPreviewComp';
import color from '../constants/color';

//import { useNavigation, useRoute } from '@react-navigation/native';

const LocationSelectorComp = (props) => {
    //const { DatosEmprendedor } = props;

    const [ pickedLocation, setPickedLocation ] = useState();
    // const navigation = useNavigation();
    //const route = useRoute();
    //console.log("Longitud: " + props.DatosEmprendedor.longitud);
    
    const handlerGeoLocation = async () => {        
        const isLocationOK = await verifyPermission();
        if(!isLocationOK) return;
        //const location = await Location.getCurrentPositionAsync({timeout: 5000});

        setPickedLocation({
            // lat: location.coords.latitude,
            // lng: location.coords.longitude
            lat: props.DatosEmprendedor.latitud,
            lng: props.DatosEmprendedor.longitud
        });
        // props.onLocation({
        //     // lat: location.coords.latitude,
        //     // lng: location.coords.longitude
        //     lat: DatosEmprendedor.latitud,
        //     lng: DatosEmprendedor.longitud
        // })
    }

    // setPickedLocation({
    //     lat: props.DatosEmprendedor.latitud,
    //     lng: props.DatosEmprendedor.longitud
    // });

    // const handlerPickOnMap = async () => {
        
    //     const isLocationOK = await verifyPermission();
    //     if(!isLocationOK) return;

    //     navigation.navigate('Map');
    // }

    const verifyPermission = async () => {
        const status = await Location.requestForegroundPermissionsAsync();
        //console.log(status);
        if(status.status!= 'granted'){
            Alert.alert(
                'Permisos insuficientes.',
                'Necesita dar permisos de ubicacion para utilizar esta aplicacion.',
                [{text: 'Ok'}]
            )
            return false;
        }
        return true;
    }

    // const mapLocation = route?.params?.mapLocation;

    // useEffect(() => {
    //     if(mapLocation) {
    //         setPickedLocation(mapLocation);
    //         props.onLocation(mapLocation);
    //     }
    // }, [mapLocation]);

   useEffect(() => {
       async function ValidaPermiso() {
            const isLocationOK = await verifyPermission();
            if(!isLocationOK) return;
            setPickedLocation({
                lat: props.DatosEmprendedor.latitud,
                lng: props.DatosEmprendedor.longitud
            });
            //console.log("LATITUD: " + props.DatosEmprendedor.latitud)
       }
       ValidaPermiso();
   }, []);

    return (
        <View style={styles.container}>
            {/* <View style={styles.preview}>
                {   pickedLocation
                    ? <Text>{pickedLocation.lat}, {pickedLocation.lng}</Text>
                    : <Text>Esperando ubicacion...</Text>
                }
            </View>
            <Button
                    title="Obtener Ubicacion"
                    color={color.PEACH_PUFF}
                    onPress={handlerGeoLocation}
                /> */}
            <MapPreviewComp location={pickedLocation} style={styles.preview}>
                <Text>Ubicacion en proceso...</Text>
            </MapPreviewComp>
            <View style={styles.actions}>
                {/* <Button
                    title="Obtener Ubicacion"
                    color={color.Naranjo}
                    onPress={handlerGeoLocation}
                /> */}
                {/* <Button
                    title="Elegir del mapa"
                    color={COLORS.LIGTH_PINK}
                    onPress={handlerPickOnMap}
                /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    preview: {
        width: '75%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.Azul,
        alignSelf: 'center',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default LocationSelectorComp;
