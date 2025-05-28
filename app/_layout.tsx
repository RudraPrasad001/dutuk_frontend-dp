import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Index */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="UserLogin"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="UserRegister"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
          animation: "fade",
        }}
      />
      <Stack.Screen name="UserDashboard" options={{ headerShown: false }} />
    </Stack>
  );
}
