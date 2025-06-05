import { router } from "expo-router";
import React from "react";
import {
  DimensionValue,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import authButtonStyle from "../css/authButtonStyle";

type ButtonColorType = "button" | "buttonSecondary";

// TODO: Should make these into a separate utils for cleaner code
export type ValidRoute = Parameters<typeof router.push>[0];

type AuthButtonProps = {
  buttonText: string;
  route?: ValidRoute;
  buttonColorType?: ButtonColorType;
  navigationType?: "push" | "replace";
  onPress?: () => void;
  width?: DimensionValue;
  height?: DimensionValue;
};

const AuthButton: React.FC<AuthButtonProps> = ({
  buttonText,
  route,
  buttonColorType = "button",
  navigationType = "push",
  onPress,
  width,
  height,
}) => {
  const baseStyle = authButtonStyle[buttonColorType];
  const buttonStyle: StyleProp<ViewStyle> = {
    ...baseStyle,
    ...(width !== undefined && { width }),
    ...(height !== undefined && { height }),
  };

  const handlePress = () => {
    onPress?.();

    if (route) {
      navigationType === "replace" ? router.replace(route) : router.push(route);
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
