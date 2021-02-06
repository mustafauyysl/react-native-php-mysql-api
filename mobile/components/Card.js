import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = (props) => {
  const url = 'http://mustafauysal.com.tr/locally/images/';
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.box}></View>
      <Image style={styles.img} source={{uri: url + props.image}} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    height: 300,
    justifyContent: 'flex-end',
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 20,
    opacity: 0.4,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    zIndex: -1,
  },
  title: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Card;
