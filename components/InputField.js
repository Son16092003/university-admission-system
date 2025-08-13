import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText, keyboardType = 'numeric' }) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    paddingHorizontal:10,
    marginBottom: 18,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
    color: "#2C3E50",
  },
  input: {
    borderWidth: 1,
    borderColor: "#B9D6F3",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
  },
});

export default InputField;
