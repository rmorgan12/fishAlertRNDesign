import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image 
            style={{width: 200, height: 200}}
            source={require('../../assets/images/abbrev_logo.png')}
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