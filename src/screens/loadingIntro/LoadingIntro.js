import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback} from 'react-native';
//View --> UIVIEW

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loading_title_text}>Fish Alert</Text>
      <Text style={styles.loading_text}>Never Miss a Bite Again Loading</Text>
      <StatusBar style="auto" />
      <Image 
        style={{width: 400, height: 400}}
        source={require('../../assets/images/logo.jpg')}
      />
    </SafeAreaView>
  );
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
});
