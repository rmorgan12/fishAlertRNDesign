import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LoadingIntro from './src/screens/loadingIntro/LoadingIntro'
import HomeScreen from './src/screens/home/Home'
import LoginScreen from './src/screens/login/Login'
import SignUpScreen from './src/screens/signUp/SignUp'
import AlertsScreen from './src/screens/alerts/Alerts'
import ProfileScreen from './src/screens/profile/Profile'
import BluetoothScreen from './src/screens/bluetooth/Bluetooth'



function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Alerts" component={AlertsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Bluetooth" component={BluetoothScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;