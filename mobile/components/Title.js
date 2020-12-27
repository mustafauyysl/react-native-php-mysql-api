import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Title = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Title;