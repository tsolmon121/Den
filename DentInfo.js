import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const DentInfo = ({ route }) => {
    const { item } = route.params;
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>{item.name}</Text>
  
        <Image
          style={styles.image}
          source={item.image} // Dynamically use the image from the data
        />
  
        <Text style={styles.infoText}>주소: Example Address</Text>
        <Text style={styles.infoText}>전화번호: 010-1234-5678</Text>
        <Text style={styles.infoText}>진료 시간 및 진료 여부: 9 AM - 6 PM</Text>
  
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>진료 예약</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 400,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
  },
  tabButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  tabButton: {
    padding: 8,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  reserveButton: {
    padding: 16,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
  },
  reserveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default DentInfo;