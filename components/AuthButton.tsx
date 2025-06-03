import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import authButtonStyle from "../css/authButtonStyle";

type ButtonColorType = "button" | "buttonSecondary";

// TODO : Should make these into a seperate utils for cleaner code
export type ValidRoute = Parameters<typeof router.push>[0];

type AuthButtonProps = {
  buttonText: string;
  route?: ValidRoute;
  buttonColorType?: ButtonColorType;
  navigationType?: "push" | "replace";
  onPress?: () => void;
};

const AuthButton: React.FC<AuthButtonProps> = ({
  buttonText,
  route,
  buttonColorType = "button",
  navigationType = "push",
  onPress,
}) => {
  const buttonStyle = authButtonStyle[buttonColorType];

  const handlePress = () => {
    if (onPress) {
      onPress();
    }

    if (route) {
      if (navigationType === "replace") {
        router.replace(route);
      } else {
        router.push(route);
      }
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
