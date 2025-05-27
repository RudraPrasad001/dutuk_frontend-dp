import authButtonStyle from "@/css/authButtonStyle";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const UserAuth = () => {
  return (
    <View>
      <Pressable
        style={authButtonStyle.button}
        onPress={() => router.push("/UserLogin")}
      >
        <Text style={authButtonStyle.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={authButtonStyle.buttonSecondary}>
        <Text style={authButtonStyle.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

export default UserAuth;
