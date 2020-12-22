import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Card = ({image, text}) => {
  return (
    <View style={styles.container}>
      <Text> {text} </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    height: 100,
  },
});
