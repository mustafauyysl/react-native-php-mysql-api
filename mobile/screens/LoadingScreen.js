import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';

const LoadingScreen = props => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/loading.gif')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default LoadingScreen;