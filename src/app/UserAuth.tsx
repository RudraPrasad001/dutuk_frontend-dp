import React from "react";
import { View } from "react-native";
import AuthButton from "../components/AuthButton";

const UserAuth = () => {
  return (
    <View>
      <AuthButton buttonText="Login" route="/UserLogin" />
      {/* <Pressable
        style={authButtonStyle.buttonSecondary}
        onPress={() => router.push("/UserRegister")}
      >
        <Text style={authButtonStyle.buttonText}>Register</Text>
      </Pressable> */}
      <AuthButton
        buttonText="Register"
        route="/UserRegister"
        buttonColorType="buttonSecondary"
      />
    </View>
  );
};

export default UserAuth;
