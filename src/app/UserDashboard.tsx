import authButtonStyle from "@/src/css/authButtonStyle";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const UserDashboard = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          marginTop: 100,
          padding: 50,
          fontSize: 30,
          textAlign: "justify",
        }}
      >
        This is the user UserDashboard. Click below to go back to user auth page
        (;
      </Text>
      <Pressable
        style={authButtonStyle.buttonSecondary}
        onPress={() => router.push("/")}
      >
        <Text style={authButtonStyle.buttonText}>Click me</Text>
      </Pressable>
    </View>
  );
};

export default UserDashboard;
