import React, { useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// --- Hardcoded data ---
const initialAppointments = [
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
];

export default function QueueScreen() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [modalVisible, setModalVisible] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    service: "",
    notes: "",
  });

  const handleAddWalkIn = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newAppointment = {
      id: (appointments.length + 1).toString(),
      name: newClient.name || "Walk-in Client",
      service: newClient.service || "General Service",
      details: newClient.notes || "No additional notes",
      time: `${formattedTime} (Walk-in)`,
      status: "Upcoming",
    };

    setAppointments([newAppointment, ...appointments]);
    setModalVisible(false);
    setNewClient({ name: "", service: "", notes: "" });
  };

  const renderItem = ({ item }: any) => (
  <View style={styles.queueCard}>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <Text style={styles.clientName}>{item.name}</Text>

      {/* Status Pill */}
      <View
        style={[
          styles.statusPill,
          item.status === "Completed"
            ? styles.Completed
            : item.status === "In Progress"
            ? styles.InProgress
            : styles.Upcoming,
        ]}
      >
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>

    <Text style={styles.service}>{item.service}</Text>
    <Text style={styles.time}>{item.time}</Text>
    <Text style={styles.notes}>{item.details}</Text>
  </View>
);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Queue Management</Text>
      <Text style={styles.subtitle}>Current walk-in queue</Text>

      {/* Queue Summary */}
      <View style={styles.queueHeader}>
        <View>
          <Text style={styles.totalLabel}>Total in Queue</Text>
          <Text style={styles.totalCount}>{appointments.length}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+ Add Walk-in</Text>
        </TouchableOpacity>
      </View>

      {/* Queue List */}
      <ScrollView style={{ marginTop: 10 }}>
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </ScrollView>

      {/* Add Walk-in Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Walk-in Client</Text>

            <TextInput
              placeholder="Client Name"
              value={newClient.name}
              onChangeText={(text) =>
                setNewClient({ ...newClient, name: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Type of Service"
              value={newClient.service}
              onChangeText={(text) =>
                setNewClient({ ...newClient, service: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Additional Notes / Preferences"
              value={newClient.notes}
              onChangeText={(text) =>
                setNewClient({ ...newClient, notes: text })
              }
              multiline
              style={[styles.input, { height: 80 }]}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleAddWalkIn}
              >
                <Text style={styles.submitText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 15,
  },
  queueHeader: {
    backgroundColor: "#E9F6F2",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 15,
    color: "#1C6758",
    fontWeight: 600
  },
  totalCount: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1C6758",
  },
  addButton: {
    backgroundColor: "#1C6758",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  queueCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  clientName: {
    color: "#1C6758",
    fontSize: 16,
    fontWeight: "600",
  },
  service: {
    color: "#555",
    marginTop: 4,
  },
  time: {
    color: "#1C6758",
    fontWeight: "500",
    marginTop: 4,
  },
  notes: {
    color: "#777",
    marginTop: 6,
    fontSize: 12,
  },
  statusPill: {
  paddingVertical: 4,
  paddingHorizontal: 10,
  borderRadius: 12,
  alignSelf: "flex-start",
  },
  statusText: {
  fontSize: 11,
  color: "#fff",
  fontWeight: "600",
  },
  Completed: { backgroundColor: "#4CAF50" },
  InProgress: { backgroundColor: "#FFA000" },
  Upcoming: { backgroundColor: "#2196F3" },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C6758",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    fontSize: 14,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  cancelText: {
    color: "#888",
  },
  submitButton: {
    backgroundColor: "#1C6758",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
  },
});
