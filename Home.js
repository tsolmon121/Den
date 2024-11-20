import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import BottomNavigation from "./BottomNavigation";


const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>북현로 35</Text>
      </View>

      {/* Reservation Button */}
      <TouchableOpacity style={styles.reservationButton}>
        <Text style={styles.buttonText}>예약</Text>
      </TouchableOpacity>

      {/* Payment Section */}
      <TouchableOpacity style={styles.paymentSection}>
        <Text style={styles.paymentText}>결제 수단 등록</Text>
      </TouchableOpacity>
      

      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>할인 및 이벤트들</Text>
        <Image
          source={require("./images/dentalsale.png")} 
          style={styles.bannerImage}
          resizeMode="cover"
        />
        
        <Text style={styles.bannerPage}>1/23</Text>
      </View>

      <BottomNavigation activePage="Home" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    padding: 20,
    // backgroundColor: "#f5f5f5",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  
  welcomeText: {
    fontSize: 18,
    color: "#333",
  },
  reservationButton: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", 
  },
  paymentSection: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  banner: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: "bold",
    color:'#333',
    marginBottom: 8,
  },
  bannerPage: {
    fontSize: 12,
    color: "#999",
  },
});

export default Home;
