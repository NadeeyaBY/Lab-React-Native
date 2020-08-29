import React from 'react';
import { View , Text, StatusBar, Dimensions } from 'react-native';
import { FlatList, TouchaleHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-natigetion/native";
//import WeatherScreen from './WeatherScreen';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#EOFFFF" onPress={() => navigation.navigate('weather',{zipCode: code}) }  >
     
        <View style={ style.box}>
            <Text style={styles.place}>{place}</Text>
            <Text sytle={styles.code}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <StatusBar barstyle="auto" />
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        paddingTop: 0,
        paddingLeft: 0,
        flexDirection: 'row',
        alignItems: "center",
        height: 60,
        width: width,
    },

    place: {
        paddingLeft: 16,
        textAlign: 'left',
        fontSize: 17,
        fontWeight: "bold",
        color: "#000000",

    },

    temperature: {
        paddingLeft: 16,
        fontSize: 22,
        color: "#000000",
    },
    
    code: {
        fontSize: 15,
        color: "#000000",
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