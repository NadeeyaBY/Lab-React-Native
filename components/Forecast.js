import React from 'react'
import { View,Text, StyleSheet } from 'react-native';


export default function Forecast(props) {
    return (
        <View >
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text style={styles.temp}>{props.temp}°C</Text>
                <Text>Good</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    temp: {
        fontSize: 34,
        fontWeight: "bold"
    },
});