import AuthButton from "@/components/AuthButton";
import logoutUser from "@/hooks/useLogoutUser";
import React from "react";
import { View } from "react-native";

const logout = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AuthButton
        buttonText="Logout"
        buttonColorType="buttonSecondary"
        onPress={() => logoutUser()}
      />
    </View>
  );
};

export default logout;
