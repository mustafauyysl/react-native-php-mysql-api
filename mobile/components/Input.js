import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = (props) => {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      style={styles.container}
      placeholder={props.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 15,
    height: 30,
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 15,
    width: '95%',
  },
});

export default Input;
