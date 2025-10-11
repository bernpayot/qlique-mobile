import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ClientDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // Example: Fetch or match client by ID
  const client = {
    name: "Ana Cruz",
    visits: 8,
    rating: 4.8,
    service: "Hair Treatment",
    time: "1:00 PM",
    duration: "60 minutes",
    preferences:
      "Deep conditioning treatment. Prefers organic products. Sensitive scalp.",
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Client Details</Text>
      <Text style={styles.text}>Client ID: {id}</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={require("../../../assets/images/client.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>{client.name}</Text>
        <Text style={styles.subText}>Regular Client • {client.visits} visits</Text>
        <Text style={styles.rating}>⭐ {client.rating} average rating</Text>
      </View>

      {/* Today's Service */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Service</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Service:</Text>
          <Text style={styles.value}>{client.service}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Time:</Text>
          <Text style={styles.value}>{client.time}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.value}>{client.duration}</Text>
        </View>
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client Preferences</Text>
        <View style={styles.preferenceBox}>
          <Text style={styles.preferenceText}>{client.preferences}</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7F5",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  backText: {
    color: "#1C6758",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C6758",
    marginBottom: 16,
  },
  text: { 
    fontSize: 16,
     marginTop: 10,
      color: "#333" 
    },

  profileCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    tintColor: "#1C6758",
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 13,
    color: "#777",
  },
  rating: {
    fontSize: 14,
    color: "#1C6758",
    fontWeight: "600",
    marginTop: 4,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C6758",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: "#777",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  preferenceBox: {
    backgroundColor: "#E6F4EF",
    borderRadius: 8,
    padding: 10,
  },
  preferenceText: {
    color: "#1C6758",
    fontSize: 13,
  },
});
