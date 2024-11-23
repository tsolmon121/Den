import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import BottomNavigation from "./BottomNavigation";

const Reservation = ({ navigation }) => {
    const data = [
      { id: "1", name: "OOO 치과", waiting: "13명 대기중", image: require("./images/dent1.png") },
      { id: "2", name: "XXX 치과", waiting: "6명 대기중", image: require("./images/dent2.png") },
      { id: "3", name: "△△△ 치과", waiting: "9명 대기중", image: require("./images/dent3.png") },
    ];
  
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.list}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => navigation.navigate("DentInfo", { item })}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.waitingText}>{item.waiting}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <BottomNavigation activePage="Reservation" />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  sortButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
  },
  list: {
    paddingBottom: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: 150,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  waitingText: {
    fontSize: 14,
    color: "#555",
  },
});

export default Reservation;