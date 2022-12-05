import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>LoginPage</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Bluetooth')}
            />
        </View>


    )

// function Login(props) {
//     return (
//         <Text>LoginPage</Text>
//     );
// };
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