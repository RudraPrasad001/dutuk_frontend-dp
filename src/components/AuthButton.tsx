import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import authButtonStyle from "../css/authButtonStyle";
import { AuthAllowedRoute } from "../utils/AuthAllowedRoute";

type ButtonColorType = "button" | "buttonSecondary";

type AuthButtonProps = {
  buttonText: string;
  route: AuthAllowedRoute;
  buttonColorType?: ButtonColorType;
};

const AuthButton = ({
  buttonText,
  route,
  buttonColorType = "button",
}: AuthButtonProps) => {
  const buttonStyle = authButtonStyle[buttonColorType];

  return (
    <View>
      <Pressable
        style={buttonStyle}
        onPress={() => router.push(route)}
        accessibilityRole="button"
        accessibilityLabel={buttonText}
      >
        <Text style={authButtonStyle.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default AuthButton;
