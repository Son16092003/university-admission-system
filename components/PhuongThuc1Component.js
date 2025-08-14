import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "react-native-web";
import InputField from "./InputField";
import CCTAInput from "./DiemCCTAComponent";

const PhuongThuc1Component = ({
  form,
  setForm,
  dsCCTA,
  dsCCQT,
  onTinhDiem,
}) => {
  const handleChange = (parentKey, childKey, value) => {
    setForm((prev) => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey],
        [childKey]: value,
      },
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionText}>Điểm học lực</Text>

      {
        form.toHopXetTuyen && form.toHopXetTuyen.includes("Tiếng Anh") &&
        <>
          <CCTAInput form={form} handleChange={handleChange} dsCCTA={dsCCTA} />
        </>
      }
      <Text style={styles.sectionTitle}>Điểm năng lực</Text>
      <InputField
        label="Điểm ĐGNL"
        value={form.diemDGNL.tong}
        onChangeText={(value) => handleChange("diemDGNL", "tong", value)}
      />

      <InputField
        label="Điểm Toán của bài ĐGNL"
        value={form.diemDGNL.toan}
        onChangeText={(value) => handleChange("diemDGNL", "toan", value)}
      />

      <Text style={styles.sectionTitle}>Điểm TNTHPT (3 môn tổ hợp):</Text>
      {renderInput("TB10 môn 1", "tb10_1", "numeric")}
      {renderInput("TB10 môn 2", "tb10_2", "numeric")}
      {renderInput("TB10 môn 3", "tb10_3", "numeric")}
      {renderInput("TB10 môn 4", "tb10_4", "numeric")}
      {renderInput("TB10 môn 5", "tb10_5", "numeric")}

      <Button title="Tính điểm" onPress={onTinhDiem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#011F82",
    // marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#34495E",
    marginBottom: 10,
  },
});

export default PhuongThuc1Component;
