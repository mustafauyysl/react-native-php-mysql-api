import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Icon  name={props.icon} size={25}/>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#FC9A38',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10,
       borderRadius: 15,
       flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default Button;