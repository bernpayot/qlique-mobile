import { Tabs } from "expo-router";
import { Dimensions, Image, Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1C6758",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          height: 65,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/dashboard.png")}
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="queue"
        options={{
          title: "Queue",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/queue.png")}
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
  name="calendar"
  options={{
    title: "Calendar",
    tabBarLabel: ({ focused }) => {
      const { height } = Dimensions.get("window");
      const isLandscape = height < 500;
      // Hide label in landscape to prevent overlap
      if (isLandscape) return null;
      return (
        <Text
          style={{
            color: focused ? "#1C6758" : "#9CA3AF",
            fontWeight: focused ? "600" : "400",
            fontSize: 12,
            
          }}
        >
          Calendar
        </Text>
      );
    },
    tabBarIcon: ({ focused }) => {
      const { height } = Dimensions.get("window");
      const isLandscape = height < 500;

      const size = isLandscape ? 46 : 50;
      const offset = isLandscape ? 18 : 25;

      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: offset, 
          }}
        >
          <View
            style={{
              backgroundColor: "#1C6758",
              width: size,
              height: size,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#1c6758cc",
              shadowOpacity: 0.25,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
              elevation: 7,
            }}
          >
            <Image
              source={require("../../assets/images/calendars.png")}
              style={{
                tintColor: "#fff",
                width: isLandscape ? 22 : 26,
                height: isLandscape ? 22 : 26,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      );
    },
  }}
/>
      <Tabs.Screen
        name="clients"
        options={{
          title: "Clients",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/client.png")}
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/profile.png")}
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
