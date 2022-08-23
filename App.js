import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import Login from './src/screens/login/Login';
import SignUp from './src/screens/signUp/SignUp';
import LoadingIntro from './src/screens/loadingIntro/LoadingIntro'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
      name="Login" 
      component={Login} />
    <Stack.Screen
      name="Sign Up"
      component={SignUp}
      options={{ title: 'Welcome to Fish Alert lets grab a beer Loyd' }}
    />
    </Stack.Navigator>
  </NavigationContainer>
  
    // </SafeAreaView>
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
