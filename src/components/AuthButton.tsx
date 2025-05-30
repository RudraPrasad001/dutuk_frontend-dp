import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import authButtonStyle from "../css/authButtonStyle";
import { AuthAllowedRoute } from "../utils/AuthAllowedRoute";

type AuthButtonProps = {
  buttonText: string;
  route: AuthAllowedRoute;
};

const AuthButton = ({ buttonText, route }: AuthButtonProps) => {
  return (
    <View>
      <Pressable
        style={authButtonStyle.button}
        onPress={() => router.push(route)}
      >
        <Text style={authButtonStyle.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default AuthButton;
