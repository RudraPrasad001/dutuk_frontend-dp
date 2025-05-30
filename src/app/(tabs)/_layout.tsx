import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let icon = "";
          if (route.name === "home") icon = "⌂";
          else if (route.name === "settings") icon = "⚙";
          else if (route.name === "logout") icon = "◀";

          return <Text style={{ color, fontSize: size }}>{icon}</Text>;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="logout" options={{ title: "Logout" }} />
    </Tabs>
  );
}
