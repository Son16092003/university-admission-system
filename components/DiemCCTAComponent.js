import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const CCTAInput = ({ form, handleChange, dsCCTA }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Chứng chỉ tiếng Anh</Text>

      {/* Radio chọn Có / Không */}
      {
      ["1", "2", "3", "4"].includes(form.doiTuong) && 
      (
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleChange("CCTA", "chungChi", "co")}
          >
            <View style={styles.radioCircle}>
              {form.CCTA.chungChi === "co" && (
                <View style={styles.selectedDot} />
              )}
            </View>
            <Text style={styles.radioLabel}>Có CCTA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleChange("CCTA", "chungChi", "khong")}
          >
            <View style={styles.radioCircle}>
              {form.CCTA.chungChi === "khong" && (
                <View style={styles.selectedDot} />
              )}
            </View>
            <Text style={styles.radioLabel}>Không có CCTA</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Chỉ hiển thị nếu chọn "Có" */}
      {
       !["1", "2", "3", "4"].includes(form.doiTuong) ||
        form.CCTA.chungChi === "co" && 
        (
        <View style={styles.ccqtRow}>
          <View style={[styles.pickerContainer, styles.ccqtPicker]}>
            <Picker
              selectedValue={form.CCTA.loai}
              onValueChange={(value) => handleChange("CCTA", "loai", value)}
            >
              {dsCCTA &&
                dsCCTA.map((item, index) => (
                  <Picker.Item key={index} label={item} value={item} />
                ))}
            </Picker>
          </View>

          <TextInput
            style={[styles.input, styles.ccqtInput]}
            keyboardType="numeric"
            placeholder="Điểm CCTA tương ứng"
            value={form.CCTA.diem}
            onChangeText={(value) => handleChange("CCTA", "diem", value)}
          />
        </View>
      )}
    </View>
  );
};

export default CCTAInput;

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#B9D6F3",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  ccqtRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  ccqtPicker: {
    flex: 1,
  },
  ccqtInput: {
    flex: 1,
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
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    gap: 20,
    paddingHorizontal: 10,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#011F82",
  },
  radioLabel: {
    fontSize: 14,
    color: "#333",
  },
});
