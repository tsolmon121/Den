import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";


const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = [
    
    "10:00", "10:30", "11:00", "11:30",
    
    "14:00", "15:00", "15:30", "16:00", 
  ];

  return (
    <View style={styles.container}>
      {/* Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "orange" },
        }}
        theme={{
          todayTextColor: "red",
          arrowColor: "orange",
        }}
      />

      {/* Time Slots */}
      <Text style={styles.sectionTitle}>예약 가능 시간</Text>
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item}
        numColumns={8}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.timeSlot,
              selectedTime === item && styles.selectedTimeSlot,
            ]}
            onPress={() => setSelectedTime(item)}
          >
            <Text style={styles.timeText}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.timeGrid}
      />

      {/* Confirm Button */}
      <TouchableOpacity
        style={[
          styles.button,
          selectedTime ? styles.activeButton : styles.disabledButton,
        ]}
        disabled={!selectedTime}
        onPress={() => alert(`Appointment confirmed for ${selectedDate} at ${selectedTime}`)} //한국어로 바뀌기
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  timeGrid: { marginVertical: 10 },
  timeSlot: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  selectedTimeSlot: { backgroundColor: "orange" },
  timeText: { fontSize: 14 },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  activeButton: { backgroundColor: "orange" },
  disabledButton: { backgroundColor: "#ccc" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default Appointment;