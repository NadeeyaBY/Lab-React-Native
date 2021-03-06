import React from 'react';
import { View , Text, StatusBar,StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
//import WeatherScreen from './WeatherScreen';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;



const availableZipItems = [
    { place: 'Chiangmai', code: '50000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Hatyai', code: '90110' },
    { place: 'Khonkaen', code: '40000' }, 
    { place: 'Khuan Ka Long', code: '91130' },
    { place: 'Min Buri', code: '10510' },
    { place: 'Muang Songkhal', code: '90000' },
    { place: 'Trang', code: '92000' },
    
   
    
]

    

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#87CEFA" onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.box}>
            <Text style={styles.city}>{place}</Text>
            <Text style={styles.description}> : {code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    
    return (
        <View>
           
           <ImageBackground source={require('../day.jpg')} style={styles.backdrop}>    
                <StatusBar barstyle="auto" />
                <FlatList data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                /> 
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

    box: {
        paddingTop: 5,
        paddingLeft: 0,
        flexDirection: 'row',
        alignItems: "center",
        height: 80,
        width: width,
    },

    city: {
        paddingLeft: 125,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: "#7FFFD4",

    },
    
    description: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFF00",
    },

    weatherIcon: {
        width: 30,
        height: 30,
    },

    icon: {
        flexDirection: 'row',
        alignItems: "center",
    }

});