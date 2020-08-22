import React, {useState} from 'react'
import Forecast from './Forecast'
import { View,Text, ImageBackground, StyleSheet } from 'react-native'

 

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <Text>Zip Code</Text>
        <Text>{props.zipCode}</Text>
        <Forecast {...forecastInfo} />
        </ImageBackground>
        
    );
}
const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
});
