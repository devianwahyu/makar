import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  const { type, text, onPress } = props;

  const btnColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const txtColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: btnColor}]}
        onPress={onPress}
      >
        <Text style={[styles.text, {color: txtColor}]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;