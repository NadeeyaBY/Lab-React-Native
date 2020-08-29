import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import { View,StatusBar, ImageBackground ,StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
 

export default function Weather(props) {
    const navigation = useNavigation()

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',  
        description: '-',
        temp: 0,
        name: '-',
        icon: '-',
        country: '-',
    })
    
    
    useEffect(() => {

        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=08e42a7aa9292eca7c6b47b226f90ad2`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    name: json.name,
                    icon: json.weather[0].icon,
                    country: json.sys.country,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    return (
        
        <View>
            <ImageBackground source={require('../night.jpg')} style={styles.backdrop}>
                <StatusBar barStyle="auto" />
                <Forecast {...forecastInfo} /> 
            </ImageBackground>
        </View>
        
        
    );
}
const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
});
   
