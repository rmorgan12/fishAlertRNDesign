import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback} from 'react-native';
const s = require('./style');
//View --> UIVIEW
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={s.loading_title_text}>Fish Alert</Text>
      <Text style={s.loading_text}>Never Miss a Bite Again</Text>
      <StatusBar style="auto" />
      <Image 
      style={{width: 400, height: 400}}
      source={require('./src/assets/images/abbrev_logo.png')}
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
});
