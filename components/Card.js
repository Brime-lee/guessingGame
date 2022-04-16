import React from 'react';
import { View, StyleSheet } from 'react-native';

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 8,
  },
});

export default Card;
