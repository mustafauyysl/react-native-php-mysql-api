import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const CategoryCard = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[styles.container, {backgroundColor: props.color}]}>
      <Text style={styles.title}>{props.title}</Text>
      <Icon name={props.icon} size={80} color="#fff" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
    height: 250,
    width: 150,
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});
export default CategoryCard;
