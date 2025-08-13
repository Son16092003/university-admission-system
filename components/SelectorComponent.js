import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SelectorComponent = ({ dsNganh, form, setForm }) => {
  const [toHopTheoNganh, setToHopTheoNganh] = useState();

  const handleChange = (key, value) => {
    if (key === "nganhXetTuyen") {
      setToHopTheoNganh(
        dsNganh.find((item) => item.name === value).combinations
      );
      console.log(value);
      console.log(typeof value);
      setForm({
        ...form,
        [key]: value,
        toHopXetTuyen: [],
      });
    } else if (key === "toHopXetTuyen") {
      let temp = value.split(", ");
      console.log(temp);
      setForm({ ...form, toHopXetTuyen: temp });
    } else {
      setForm({ ...form, [key]: value });
    }
  };

  // const updateDoiTuong = (value) => {
  //   setDoiTuong(value);

  //   // when we implement redux, this is gonna be where we update state
  // };

  // const updateNganh = (value) => {
  //   setNganh(value);

  //   setToHopTheoNganh(dsNganh.find((item) => item.name === value).combinations);
  //   setToHop();

  //   // when we implement redux, this is gonna be where we update state
  // };

  // const updateToHop = (value) => {
  //   let temp = value.split(", ");
  //   console.log(temp);
  //   setToHop(temp);

  //   // when we implement redux, this is gonna be where we update state
  // };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Chọn đối tượng xét tuyển:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.doiTuong}
            onValueChange={(value) => handleChange("doiTuong", value)}
          >
            <Picker.Item label="-- Chọn đối tượng --" value="" />
            <Picker.Item
              label="Thí sinh CÓ kết quả thi ĐGNL ĐHQG-HCM 2025"
              value="1"
            />
            <Picker.Item
              label="Thí sinh KHÔNG CÓ kết quả thi ĐGNL ĐHQG-HCM 2025"
              value="2"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp chương trình THPT nước ngoài"
              value="3"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp THPT Việt Nam, dùng chứng chỉ quốc tế"
              value="4"
            />
            <Picker.Item
              label="Thí sinh dự tính du học theo Chương trình Chuyển tiếp Quốc tế"
              value="5"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp chương trình THPT Việt Nam"
              value="6"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp chương trình THPT nước ngoài"
              value="7"
            />
            <Picker.Item
              label="Thí sinh dùng Chứng chỉ Tuyển sinh Quốc tế SAT I"
              value="8"
            />
          </Picker>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Chọn ngành xét tuyển:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.nganhXetTuyen}
            onValueChange={(value) => handleChange("nganhXetTuyen", value)}
          >
            <Picker.Item label="-- Chọn ngành --" value="" />
            {dsNganh.map((item, index) => (
              <Picker.Item key={index} label={item.name} value={item.name} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Chọn tổ hợp xét tuyển:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.toHopXetTuyen.join(", ")}
            onValueChange={(value) => handleChange("toHopXetTuyen", value)}
          >
            <Picker.Item label="-- Chọn tổ hợp --" value="" />
            {toHopTheoNganh &&
              toHopTheoNganh.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.subjects.join(", ")}
                  value={item.subjects.join(", ")}
                />
              ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 30,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#2C3E50",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#B9D6F3",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
});

export default SelectorComponent;
