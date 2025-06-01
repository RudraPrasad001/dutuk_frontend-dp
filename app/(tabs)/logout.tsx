import AuthButton from "@/components/AuthButton";
import React from "react";
import { View } from "react-native";

const logout = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AuthButton buttonText="Logout" route="/" />
    </View>
  );
};

export default logout;
