import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";


type Appointment = {
  id: string;
  name: string;
  service: string;
  details: string;
  time: string;
  status: "Completed" | "In Progress" | "Upcoming";
  rating?: number;
};

type Props = {
  stylistName?: string;
  notifications?: number;
  todayClients?: number;
  rating?: number;
  totalRatings?: number;
  appointments?: Appointment[];
};

export default function HomeScreen({
  stylistName = "Juan",
  notifications = 2,
  todayClients = 5,
  rating = 4.9,
  totalRatings = 127,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { width } = useWindowDimensions();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return styles.Completed;
      case "In Progress":
        return styles.InProgress;
      case "Upcoming":
        return styles.Upcoming;
      default:
        return {};
    }
  };

  const renderItem = ({ item }: { item: Appointment }) => {
    const isSelected = selectedId === item.id;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setSelectedId(isSelected ? null : item.id)}
        style={[styles.card, isSelected && styles.cardSelected]}
      >
        <View style={styles.cardHeader}>
          <Image
            source={require("../../assets/images/user-icon.png")}
            style={[
              styles.avatar,
              { width: width * 0.1, height: width * 0.1, borderRadius: width * 0.05 },
            ]}
            resizeMode="cover"
          />
          <View style={{ flex: 1, marginLeft: width * 0.03 }}>
            <Text style={styles.clientName} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.service} numberOfLines={1}>
              {item.service}
            </Text>
            <Text style={styles.details} numberOfLines={1}>
              {item.details}
            </Text>
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        {/* Rating section */}
        {!isSelected && item.rating && (
          <View style={styles.ratingContainer}>
            <Text style={styles.clientRated}>Client rated:</Text>
            <View style={styles.stars}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <Image
                  key={i}
                  source={require("../../assets/images/stars.png")}
                  style={[styles.starIcon, { width: width * 0.04, height: width * 0.04 }]}
                  resizeMode="contain"
                />
              ))}
            </View>
          </View>
        )}

        {/* Action Buttons */}
        {isSelected && (
          <View style={styles.actions}>
            <TouchableOpacity style={[styles.detailsButton, { paddingHorizontal: width * 0.04 }]}>
              <Text style={styles.detailsText}>View Details</Text>
            </TouchableOpacity>

            {/* Show Mark Complete only if In Progress */}
            {item.status === "In Progress" && (
              <TouchableOpacity style={[styles.completeButton, { paddingHorizontal: width * 0.04 }]}>
                <Text style={styles.completeText}>Mark Complete</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </TouchableOpacity>
    );
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
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Hello, {stylistName}!</Text>
            <Text style={styles.subText}>Ready for today's appointments?</Text>
          </View>
          <View style={styles.notification}>
            <Image
              source={require("../../assets/images/notification.png")}
              style={[styles.notificationIcon, { width: width * 0.06, height: width * 0.06 }]}
              resizeMode="contain"
            />
            {notifications > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notifications}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryNumber}>{todayClients}</Text>
            <Text style={styles.summaryLabel}>Today's Clients</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryNumber}>{rating} ⭐</Text>
            <Text style={styles.summaryLabel}>{totalRatings} ratings</Text>
          </View>
        </View>
      </View>

      {/* Appointment List */}
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.scheduleHeader}>
            <Text style={styles.scheduleTitle}>Today's Schedule</Text>
            <TouchableOpacity>
              <Text style={styles.viewCalendar}>View Calendar</Text>
            </TouchableOpacity>
          </View>
        }
        contentContainerStyle={[styles.scrollContent, { paddingHorizontal: width * 0.04 }]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFB" },
  header: {
  backgroundColor: "#197260ff",
  paddingTop: 40,
  paddingHorizontal: 20,
  paddingBottom: 25,
  
},

// Greeting + Notification Row
headerTop: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20, 
},

greeting: { fontSize: 20, fontWeight: "bold", color: "#fff" },
subText: { color: "#E3F2ED", marginTop: 2 },

notification: { position: "relative" },
notificationIcon: { width: 24, height: 24, tintColor: "#fff" },
badge: {
  position: "absolute",
  top: -5,
  right: -5,
  backgroundColor: "#FF6B6B",
  borderRadius: 10,
  width: 16,
  height: 16,
  justifyContent: "center",
  alignItems: "center",
},
badgeText: { color: "#fff", fontSize: 10, fontWeight: "bold" },

// Summary boxes under greeting
summary: {
  flexDirection: "row",
  justifyContent: "space-between",
},

summaryBox: {
  backgroundColor: "hsla(158, 48%, 91%, 0.32)",
  width: "48%",
  borderRadius: 12,
  paddingVertical: 16,
  alignItems: "center",
  
  },

  summaryNumber: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  summaryLabel: { color: "#fff", fontSize: 13, marginTop: 4 },

  scrollContent: {
  paddingHorizontal: 16,
  paddingTop: 8,
  paddingBottom: 100, 
  },

  scheduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  scheduleTitle: { fontSize: 18, fontWeight: "bold", color: "#333"},

  viewCalendar: { color: "#1C6758", fontWeight: "600"},
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    
  },
  cardHeader: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  clientName: { fontSize: 16, fontWeight: "600", color: "#1C6758" },
  service: { fontSize: 14, color: "#555" },
  details: { fontSize: 12, color: "#888" },
  time: { fontSize: 12, fontWeight: "600", color: "#666" },
  ratingContainer: {
  flexDirection: "row",
  justifyContent: "space-between", 
  marginTop: 5,
},
clientRated: {
  fontSize: 12,
  color: "#666",
},
stars: {
  flexDirection: "row",
},
  starIcon: { width: 14, height: 14 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: "#1C6758",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  detailsText: { color: "#1C6758", fontWeight: "600" },
  completeButton: {
    backgroundColor: "#1C6758",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  completeText: { color: "#fff", fontWeight: "600" },
  statusBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusText: { fontSize: 11, color: "#fff", fontWeight: "600" },
  Completed: { backgroundColor: "#4CAF50" },
  InProgress: { backgroundColor: "#FFA000" },
  Upcoming: { backgroundColor: "#2196F3" },

  cardSelected: {
  borderWidth: 2,
  borderColor: "#00bb96ff",
  shadowOpacity: 0.1,
  shadowRadius: 6,
  },

});
