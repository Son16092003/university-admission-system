import React from "react";
import { View, Text, StyleSheet } from "react-native";

const KetQuaComponent = ({ ketQua }) => {
  


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kết quả:</Text>
      <Text style={styles.value}>{ketQua}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  label: { fontSize: 18, fontWeight: "bold" },
  value: { fontSize: 18, color: "#007AFF" },
});

export default KetQuaComponent;
