import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
function LoginScreen({ navigation }) {

/*const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("Username");
}*/



function Login(props) {
    return (
        <SafeAreaView style={styles.container}>
        <Image 
            style={{width: 200, height: 200}}
            source={require('../../assets/images/abbrev_logo.png')}
        />
        <Text style={styles.loading_title_text}>Login</Text>
        {/*<TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        /> */}
        <Button
            title="Confirm"
            onPress={() => navigation.navigate('Bluetooth')}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
};
}
  
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

export default Login;