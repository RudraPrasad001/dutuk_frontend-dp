import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="UserLogin"
        options={{
          title: "Login",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          animation: "default",
        }}
      />
    </Stack>
  );
}
