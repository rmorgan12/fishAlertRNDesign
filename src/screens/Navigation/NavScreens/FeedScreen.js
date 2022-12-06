import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback, TextInput} from 'react-native';

function FeedScreen({navigation}) {
    return(
        <View style={styles.container}>
    <Text>Feed Screen Testing</Text>

    <Button
                title="Login"
                onPress={() => navigation.navigate('Bluetooth')}
            />
    </View>
    );
}

export default FeedScreen;