import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const DiemCCQTComponent = ({ form, handleChange, dsCCQT }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Chứng chỉ quốc tế</Text>

      {/* Radio chọn Có / Không */}
      {
      ["3", "5"].includes(form.doiTuong) && 
      (
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleChange("CCQT", "chungChi", "co")}
          >
            <View style={styles.radioCircle}>
              {form.CCQT.chungChi === "co" && (
                <View style={styles.selectedDot} />
              )}
            </View>
            <Text style={styles.radioLabel}>Có CCQT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleChange("CCQT", "chungChi", "khong")}
          >
            <View style={styles.radioCircle}>
              {form.CCQT.chungChi === "khong" && (
                <View style={styles.selectedDot} />
              )}
            </View>
            <Text style={styles.radioLabel}>Không có CCQT</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Chỉ hiển thị nếu chọn "Có" */}
      {
        // Hoặc là để điều kiện như hiện tại,
        // hoặc là làm theo kiểu trường hợp 4,7,8 mặc định form.CCQT.chungChi = "co"
        // làm cách 2 thì logic tốt hơn, và lúc đó chỉ cần 1 điều kiện form.CCQT.chungChi === "co"
       (!["3", "5"].includes(form.doiTuong) ||
        form.CCQT.chungChi === "co") && 
        (
        <View style={styles.ccqtRow}>
          <View style={[styles.pickerContainer, styles.ccqtPicker]}>
            <Picker
              selectedValue={form.CCQT.loai}
              onValueChange={(value) => handleChange("CCQT", "loai", value)}
            >
              {dsCCQT &&
                dsCCQT.map((item, index) => (
                  <Picker.Item key={index} label={item} value={item} />
                ))}
            </Picker>
          </View>

          <TextInput
            style={[styles.input, styles.ccqtInput]}
            keyboardType="numeric"
            placeholder="Điểm CCQT tương ứng"
            value={form.CCQT.diem}
            onChangeText={(value) => handleChange("CCQT", "diem", value)}
          />
        </View>
      )}
    </View>
  );
};

export default DiemCCQTComponent;

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
