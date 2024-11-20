import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNavigation = ({ activePage }) => {
  const navigation = useNavigation();

  const navItems = [
    { name: "Reservation", icon: require("./images/reservation.png") },
    { name: "Consultation", icon: require("./images/consultation.png") },
    { name: "Home", icon: require("./images/home.png") },
    { name: "Whitening", icon: require("./images/tooth-whitening.png") },
    { name: "MyPage", icon: require("./images/user.png") },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={[
            styles.navItem,
            activePage === item.name && styles.activeNavItem,
          ]}
          onPress={() => navigation.navigate(item.name)}
        >
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.navText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  navItem: {
    alignItems: "center",
  },
  activeNavItem: {
    backgroundColor: "#e0f7fa", 
    borderRadius: 8,
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
    color: "#333",
    fontWeight: "bold",
  },
});

export default BottomNavigation;
