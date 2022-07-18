import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback} from 'react-native';
const s = require('./style');
//View --> UIVIEW
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={s.title}>Fish Alert!</Text>
      <View style={s.alwaysred} ></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#609C50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
