import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback} from 'react-native';
function BluetoothScreen(props) {
    return (
        <View style={styles.container}>
            <Image 
                style={{width: 450, height: 450}}
                source={require('../../assets/images/green_power.jpg')}
            />
            <Text style={styles.loading_text}>Bluetooth</Text>
  </View>
    );
}

export default BluetoothScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#d1d1cf',
    alignItems: 'center',
    justifyContent: 'center',
    },
    loading_text: {
    color: 'black',
    fontSize: 34,
    fontWeight: 'bold'
    },
    loading_title_text: {
    color: 'black',
    fontSize: 44,
    fontWeight: 'bold'
    },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
});