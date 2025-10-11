import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
  style={styles.container}
  contentContainerStyle={styles.scrollContent}
  showsVerticalScrollIndicator={false}
>
  {/* Header */}
  <Text style={styles.header}>Profile</Text>

  {/* User Card */}
  <View style={styles.profileCard}>
    <View style={styles.avatar}>
      <Image
        source={require("../../../assets/images/client.png")}
        style={{ width: 40, height: 40, tintColor: "#1C6758" }}
      />
    </View>
    <Text style={styles.name}>Juan Cruz</Text>
    <Text style={styles.role}>Professional Stylist</Text>
    <Text style={styles.email}>juan.cruz@qlique.com</Text>

    <View style={styles.ratingRow}>
      <Image
        source={require("../../../assets/images/stars.png")}
        style={{ width: 18, height: 18 }}
      />
      <Text style={styles.ratingText}>
        4.9 <Text style={styles.subText}>(127 ratings)</Text>
      </Text>
    </View>
  </View>

  {/* Menu Options */}
  <View style={styles.menuContainer}>
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Image
          source={require("../../../assets/images/profile.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Settings</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Image
          source={require("../../../assets/images/calendars.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Availability</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Image
          source={require("../../../assets/images/stars.png")}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>My Reviews</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  </View>

  {/* Sign Out Button */}
  <TouchableOpacity style={styles.signOutButton}>
    <Text style={styles.signOutText}>Sign Out</Text>
  </TouchableOpacity>
</ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F7F5",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C6758",
    marginBottom: 20,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#E6F3EF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: "700", color: "#1C6758" },
  role: { color: "#666", fontSize: 14, marginBottom: 2 },
  email: { fontSize: 13, color: "#999", marginBottom: 6 },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  ratingText: { fontSize: 14, color: "#333", marginLeft: 4, fontWeight: "600" },
  subText: { color: "#777", fontWeight: "400" },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  menuLeft: { flexDirection: "row", alignItems: "center" },
  menuIcon: { width: 20, height: 20, tintColor: "#1C6758" },
  menuText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    marginLeft: 10,
  },
  arrow: { fontSize: 20, color: "#ccc", marginRight: 6 },
  footer: {
    marginTop: "auto", // pushes to bottom when content is short
  },
  signOutButton: {
    backgroundColor: "#FFECEC",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 14,
  },
  signOutText: { color: "#E63946", fontSize: 15, fontWeight: "600" },
});
