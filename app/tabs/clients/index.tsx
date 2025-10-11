import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Appointment = {
  id: string;
  name: string;
  service: string;
  details: string;
  time: string;
  status: string;
  rating?: number;
};

const appointments: Appointment[] = [
  {
    id: "1",
    name: "Maria Garcia",
    service: "Haircut & Style",
    details: "Short layers, natural look",
    time: "9:00 AM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "2",
    name: "John Santos",
    service: "Hair Coloring",
    details: "Ash brown color",
    time: "10:30 AM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "3",
    name: "Ana Cruz",
    service: "Hair Treatment",
    details: "Deep conditioning",
    time: "1:00 PM",
    status: "In Progress",
  },
  {
    id: "4",
    name: "Carlos Reyes",
    service: "Shave & Trim",
    details: "Classic fade",
    time: "2:30 PM",
    status: "Upcoming",
  },
  {
    id: "5",
    name: "Sofia Lim",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "4:00 PM",
    status: "Upcoming",
  },
  {
    id: "6",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Upcoming",
  },
  {
    id: "7",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "8",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "9",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "10",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "11",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "12",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "13",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "14",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
  {
    id: "15",
    name: "Sofy Limon",
    service: "Hair Rebond",
    details: "Keratin treatment",
    time: "5:00 PM",
    status: "Completed",
    rating: 5,
  },
];

export default function ClientsScreen() {
  const router = useRouter();

  
  const completedAppointments = appointments.filter(
    (item) => item.status === "Completed"
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Clients</Text>

      <FlatList
        data={completedAppointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.clientCard}
            // ✅ Absolute path to avoid Unmatched Route
            onPress={() => router.push(`/tabs/clients/details?id=${item.id}`)}
          >
            <View>
              <Text style={styles.clientName}>{item.name}</Text>
              <Text style={styles.service}>{item.service}</Text>
            </View>
            {item.rating && <Text style={styles.rating}>⭐ {item.rating}</Text>}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7F5",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C6758",
    marginBottom: 16,
  },
  clientCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  clientName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  service: {
    fontSize: 13,
    color: "#777",
  },
  rating: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1C6758",
  },
});
