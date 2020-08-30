import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function Forecast(props) {
    const setBoxColor = (main, time) => {
        if (main == 'Thunderstorm') {
            return "#0288d1"
        } else if (main == 'Drizzle') {
            return "#0288d1"
        } else if (main == 'Rain') {
            //return "#5AC8FA"
            return "#8E8E93"
        } else if (main == 'Snow') {
            return "#0288d1"
        } else if (main == 'Atmosphere') {
            return "#0288d1"
        } else if (main == 'Clouds') {
            return "#0288d1"
        } else {
            if (time[2] == 'd') {
                return "#0288d1"
            } else {
                return "#0288d1"
            }
        }
    }
    

    var img_url = "https://github.com/NadeeyaBY/Lab-React-Native/tree/master/components/forecastImage"



    return (
        <View >
            <StatusBar barStyle="auto" />
            <View style={styles.box}>
                <Text style={styles.topic}>{props.main}</Text>
               <Image style={styles.weatherIcon} source={{ uri: img_url, }} />
               <Text style={styles.city} >{props.name}</Text>
               <Text>
                    <Text style={styles.temperature} >
                        {props.temp}°
                    </Text>
                    <Text style={styles.description} >  | {props.description}</Text>
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    box: {
        paddingTop: 50,
        flexDirection: 'column',
        alignItems: "center",

        height: height,
    },
    topic: {
        paddingTop: 50,
        paddingBottom: 20,
        fontSize: 17,
        fontWeight: "bold",
        color: "#ffffff",
    },
    city: {
        paddingTop: 16,
        fontSize: 34,
        fontWeight: "bold",
        color: "#D87093",
    },
    temperature: {
        fontSize: 22,
        color: "#ffffff",
    },
    description: {
        fontSize: 20,
        color: "#ffffff",
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },

});