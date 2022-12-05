import React from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable, AutoHeightImage } from 'react-native';
function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image 
            style={{width: 450, height: 250}}
            source={require('../../assets/images/logo.jpg')}
        />
        <Text style={styles.loading_text}>Never Miss a Bite Again</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
        title="Sign-Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      </View>
    );
  }

export default HomeScreen;

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
        fontWeight: 'bold',
        padding: 20,
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