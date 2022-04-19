import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import Colors from '../constants/colors';

const MainButton = (props) => {
  let ButtonComponent = TouchableNativeFeedback;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableOpacity;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent active={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    borderRadius: 25,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default MainButton;
