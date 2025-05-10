// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 23,    // Balanced vertical padding
    paddingHorizontal: 150,  // More reasonable horizontal padding
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default CustomButton;
