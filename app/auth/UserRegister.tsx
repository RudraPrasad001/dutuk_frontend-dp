import authButtonStyle from "@/css/authButtonStyle";
import React from "react";
import { Pressable, Text, View } from "react-native";
import authPageStyle from "../../css/authPageStyle";

import AuthButton from "@/components/AuthButton";
import googleLogin from "@/hooks/useGoogleAuth";
const UserRegister = () => {
  return (
    <View style={authPageStyle.inputSection}>
      <AuthButton buttonText="Use Email" route="/auth/EmailAuth" />
      <Pressable
        onPress={() => googleLogin()}
        style={authButtonStyle.buttonSecondary}
      >
        <Text style={authButtonStyle.buttonText}>Use Google</Text>
      </Pressable>

      <View style={authPageStyle.buttonSection}></View>
    </View>
  );
};

export default UserRegister;
