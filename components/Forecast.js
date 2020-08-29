import React from 'react'
import { View,Text, StyleSheet } from 'react-native';


export default function Forecast(props) {
    
    return (
        <View >

            <View>
                <Text style={styles.main}>{props.main}</Text>
                <Text>{props.description}</Text>
                <View>
                    <Text style={styles.temp}>{props.temp}°</Text>
                    <Text style={styles.temp}>{props.temp}°C</Text>
                    <Text>Good</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    main:{
        fontSize: 30,
        fontWeight: "normal",
    },
    
    temp:{

        fontSize: 34,
        fontWeight: "bold",
    },
});