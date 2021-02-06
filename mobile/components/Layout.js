import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';

const Layout = (props) => {
  return (
    <View>
      <Header
        onPress={props.onPress}
        color={props.headerColor}
        title={props.title}
        fontSize={props.titleFontSize}
      />
      <View style={styles.container}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
  },
});

export default Layout;
