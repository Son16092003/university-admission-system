import React from "react";
import { View, Button, StyleSheet } from "react-native";
import InputField from "./InputField";

const PhuongThuc1Component = ({
  form,
  setForm,
  onTinhDiem,
}) => {

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sectionText}>Điểm học lực</Text>

      {form.toHopXetTuyen && form.toHopXetTuyen.includes("Tiếng Anh") && (
        <>
          <Text style={styles.sectionTitle}>Chứng chỉ tiếng Anh</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => handleChange("ccta", "co")}
            >
              <View style={styles.radioCircle}>
                {form.ccta === "co" && <View style={styles.selectedDot} />}
              </View>
              <Text style={styles.radioLabel}>Có CCTA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => handleChange("ccta", "khong")}
            >
              <View style={styles.radioCircle}>
                {form.ccta === "khong" && <View style={styles.selectedDot} />}
              </View>
              <Text style={styles.radioLabel}>Không có CCTA</Text>
            </TouchableOpacity>
          </View>

          {form.toHopXetTuyen.includes("Tiếng Anh") && form.ccta === "co" && (
            <View style={styles.ccqtRow}>
              <View style={[styles.pickerContainer, styles.ccqtPicker]}>
                <Picker
                  selectedValue={form.loaiCCTA}
                  onValueChange={(value) => handleChange("loaiCCTA", value)}
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
                value={form.diemCCTA}
                onChangeText={(value) => handleChange("diemCCTA", value)}
              />
            </View>
          )}
        </>
      )}

      {/* <InputField label="Điểm Toán" value={toan} onChangeText={setToan} />
      <InputField label="Điểm Lý" value={ly} onChangeText={setLy} />
      <InputField label="Điểm Hóa" value={hoa} onChangeText={setHoa} />
      <InputField label="Điểm Văn" value={van} onChangeText={setVan} />
      <InputField label="Điểm Anh" value={anh} onChangeText={setAnh} /> */}

      <Button title="Tính điểm" onPress={onTinhDiem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});

export default PhuongThuc1Component;
