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
  navigationType?: "push" | "replace";
};

const AuthButton = ({
  buttonText,
  route,
  buttonColorType = "button",
  navigationType = "push",
}: AuthButtonProps) => {
  const buttonStyle = authButtonStyle[buttonColorType];

  const handlePress = () => {
    if (navigationType === "replace") {
      router.replace(route);
    } else {
      router.push(route);
    }
  };

  return (
    <View>
      <Pressable
        style={buttonStyle}
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityLabel={buttonText}
      >
        <Text style={authButtonStyle.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default AuthButton;
