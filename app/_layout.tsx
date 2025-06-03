import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="auth/UserLogin"
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
        name="auth/UserRegister"
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
        name="auth/OtpPage"
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
        name="auth/EmailAuth"
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
    </Stack>
  );
}
