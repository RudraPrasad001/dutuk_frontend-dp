import React from "react";
import { View } from "react-native";
import authPageStyle from "../../css/authPageStyle";

import AuthButton from "@/components/AuthButton";
import googleLogin from "@/hooks/useGoogleAuth";
const UserRegister = () => {
  return (
    <View style={authPageStyle.inputSection}>
      <AuthButton
        buttonText="Use Email"
        buttonColorType="button"
        route="/auth/EmailAuth"
      />
      <AuthButton
        buttonText="Use Google"
        buttonColorType="buttonSecondary"
        onPress={() => googleLogin()}
      />
      <View style={authPageStyle.buttonSection}></View>
    </View>
  );
};

export default UserRegister;
