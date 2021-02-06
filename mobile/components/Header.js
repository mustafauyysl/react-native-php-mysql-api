import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <TouchableOpacity onPress={props.onPress} style={styles.goBack}>
        <Icon name="chevron-back" size={35} color="#fff" />
      </TouchableOpacity>
      <Text style={[styles.title, {fontSize: props.fontSize}]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 50,
    height: 300,
    position: 'absolute',
    width: '100%',
    top: -100,
    flexDirection: 'row',
  },
  title: {
    fontSize: 40,
    marginBottom: 15,
    marginTop: 154,
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  goBack: {
    marginBottom: 15,
    marginTop: 160,
    marginLeft: 20,
  },
});

export default Header;
