import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, SafeAreaView, ImageBackground, TouchableWithoutFeedback} from 'react-native';
function BluetoothScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Bluetooth</Text>
        </View>


    )
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