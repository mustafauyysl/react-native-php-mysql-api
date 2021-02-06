import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import {Rating} from 'react-native-ratings';

const CommentContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.text}</Text>
      <View style={styles.footer}>
        <Rating
          style={{alignSelf: 'flex-start'}}
          readonly
          startingValue={props.rating}
          imageSize={15}
        />
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontStyle: 'italic',
  },
  author: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
});

export default CommentContainer;
