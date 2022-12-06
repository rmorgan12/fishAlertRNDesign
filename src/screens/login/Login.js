import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
function LoginScreen({ navigation }) {
    const [myValue, setMyValue] = React.useState("");
    const [myValue2, setMyValue2] = React.useState("");
    return (
        <View style={styles.container}>
            <Image 
                style={{width: 450, height: 250}}
                source={require('../../assets/images/logo.jpg')}
            />
            <View style={{margin:20}}>
            <Text>Loging Page</Text>
            </View>
            <TextInput value={myValue} onChangeText={setMyValue} placeholder='Username'/>
            <View style={{margin:20}}>
            <TextInput value={myValue2} onChangeText={setMyValue2} placeholder='Password'/>
            </View>
            <View style={{margin:20}}>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Bluetooth')}
            />
        </View>
        </View>

  )
}



export default LoginScreen;

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