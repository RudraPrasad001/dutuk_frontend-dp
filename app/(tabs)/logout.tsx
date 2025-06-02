import authButtonStyle from "@/css/authButtonStyle";
import logoutUser from "@/hooks/useLogoutUser";
import React from "react";
import { Pressable, Text, View } from "react-native";

const logout = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        style={authButtonStyle.buttonSecondary}
        onPress={() => logoutUser()}
      >
        <Text style={authButtonStyle.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default logout;
