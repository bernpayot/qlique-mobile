import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View, } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarScreen() {
  // Selected date defaults to today
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Sample schedules
  const schedules = [
    { id: "1", date: "2025-10-09", time: "9:00 AM", client: "Maria Garcia", service: "Haircut & Style" },
    { id: "2", date: "2025-10-09", time: "10:30 AM", client: "John Santos", service: "Hair Coloring" },
    { id: "3", date: "2025-10-09", time: "1:00 PM", client: "Ana Cruz", service: "Hair Treatment" },
    { id: "4", date: "2025-10-09", time: "2:30 PM", client: "Carlos Reyes", service: "Shave & Trim" },
    { id: "5", date: "2025-10-10", time: "4:00 PM", client: "Sofia Lim", service: "Classic fade" },
  ];

  // Filter schedules for selected date
  const filteredSchedules = schedules.filter(item => item.date === selectedDate);

  // Format date 
  const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Back + Title */}
        <View style={styles.header}>
          <Text style={styles.backText}>← Back</Text>
          <Text style={styles.title}>My Calendar</Text>
        </View>

        {/* Calendar */}
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: "#1C6758" },
            }}
            theme={{
              todayTextColor: "#1C6758",
              arrowColor: "#1C6758",
              textMonthFontWeight: "bold",
              textMonthFontSize: 18,
              textDayFontFamily: "System",
              textDayHeaderFontWeight: "600",
            }}
            style={styles.calendar}
          />
        </View>

        {/* Dynamic Schedule Section */}
        <View style={styles.scheduleSection}>
          <Text style={styles.scheduleHeader}>
            {selectedDate === new Date().toISOString().split("T")[0]
              ? "Today's Schedule"
              : `Schedule for ${formattedDate}`}
          </Text>

          <FlatList
            data={filteredSchedules}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.scheduleCard}>
                <Text style={styles.time}>{item.time}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.client}>{item.client}</Text>
                  <Text style={styles.service}>{item.service}</Text>
                </View>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.noScheduleText}>
                No appointments for this date.
              </Text>
            }
            scrollEnabled={false} 
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#F3F7F5",
  },
  scrollContent: {
    paddingBottom: 40, 
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 12,
  },
  backText: {
    color: "#1C6758",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C6758",
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  calendar: {
    borderRadius: 12,
  },
  scheduleSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  scheduleHeader: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  scheduleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  time: {
    color: "#1C6758",
    fontWeight: "600",
    fontSize: 14,
    marginRight: 16,
  },
  client: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  service: {
    fontSize: 13,
    color: "#777",
  },
  noScheduleText: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
});