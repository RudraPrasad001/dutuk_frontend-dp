import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import authPageStyle from "../css/authPageStyle";
import { AuthAllowedRoute } from "../utils/AuthAllowedRoute";

type AuthAssistProp = {
  AssistText: string;
  route: AuthAllowedRoute;
  LinkText: string;
};

const AuthAssist = ({ AssistText, route, LinkText }: AuthAssistProp) => {
  return (
    <View style={authPageStyle.assistText}>
      <Text>{AssistText}</Text>
      <Pressable onPress={() => router.push(route)}>
        <Text style={{ color: "blue" }}>{LinkText}</Text>
      </Pressable>
    </View>
  );
};

export default AuthAssist;
