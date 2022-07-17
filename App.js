import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

//View --> UIVIEW
export default function App() {
  let x = 1;
  console.log("App Executed"); //delete once finished with app

  return (
    <SafeAreaView style={styles.container}>
      <Text>Fish Alert!</Text>
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
