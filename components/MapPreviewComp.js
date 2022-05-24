import { Image, StyleSheet, View } from 'react-native';

import MAP  from '../constants/Map';
import React from 'react';

const MapPreviewComp = (props) => {
    //console.log("LOCATION ASIGNADO: " + props.location);
    const mapPreviewUrl = props.location
        ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=18&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${props.location.lat},${props.location.lng}&key=${MAP.API_KEY}`
        : '';
    //console.log("URL MAPA: " + mapPreviewUrl);
    return(
        <View style={{...styles.MapPreview, ...props.style}}>
            {props.location
                ?<Image style={styles.mapImage} source={{uri: mapPreviewUrl}}/>
                :(props.children)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    MapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
})

export default MapPreviewComp;