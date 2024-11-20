import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const UserInfo = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>내 정보 수정</Text> */}
      {/* First ScrollView for Personal Settings */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>개인설정</Text>

        {/* Name */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={styles.input}
            placeholder="이름을 입력하세요."
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Phone */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>전화번호</Text>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="전화번호를 입력하세요."
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>재인증하기</Text>
          </TouchableOpacity>
        </View>

        {/* Address */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>주소</Text>
          <TextInput
            style={styles.input}
            placeholder="주소를 입력해주세요."
            value={address}
            onChangeText={setAddress}
          />
        </View>
      </ScrollView>

      {/* Second ScrollView for Email */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>계정정보</Text>

        {/* Email */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>이메일</Text>
          <TextInput
            style={styles.input}
            placeholder="이메일을 입력하세요."
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 30,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "lighter",
    color: "#333",
    marginBottom: 20,
    textAlign: "left",
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row", // All items will be in a row
    alignItems: "center", // Align them vertically in the center
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginRight: 10, // Add space between label and input field
    width: 100, // Fixed width for the label
  },
  input: {
    flex: 1, // Input field takes up remaining space
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    padding: 8,
    color: "#333",
  },
  verifyButton: {
    marginLeft: 10, // Add space between input and button
    backgroundColor: "#62b1f6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 120, // Ensure button has a fixed width
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default UserInfo;
