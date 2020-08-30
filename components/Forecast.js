import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function Forecast(props) {
   

    return (
        <View >
            
            <StatusBar barStyle="auto" />
            <View style={styles.box}>
                <Text style={styles.topic}>{props.main}</Text>
               
               <Image source={require('../day3.png')} style={styles.weatherIcon} />
               <Text style={styles.city} >{props.name}</Text>
               <Text>
                    <Text style={styles.temperature} >
                        {props.temp}c°
                    </Text>
                    <Text style={styles.description} >  | {props.description}</Text>
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    box: {
        paddingTop: 100,
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
        width: 128,
        height: 128,
    },

});