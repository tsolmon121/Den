import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";

const MyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>이름</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UserInfo")}>
            <Text style={styles.buttonText}>내 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>가족 관리</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>고객 센터</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Management Section */}
      <ScrollView style={styles.managementSection}>
        <Text style={styles.managementTitle}>관리</Text>
        {["결제 수단 관리", "진료 내역", "자주 간 병원", "내가 작성한 리뷰 보기", "미백 진단 결과", "치과 가입 문의"].map(
          (item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activePage="MyPage" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: { padding: 20, backgroundColor: "grey", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  name: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  headerButtons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  button: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  buttonText: { fontSize: 16, color: "#333" },
  managementSection: { flex: 1, paddingHorizontal: 20, marginTop: 20 },
  managementTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  listItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  listItemText: { fontSize: 16, color: "#333" },
});

export default MyPage;
