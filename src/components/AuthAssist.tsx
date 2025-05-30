import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
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
      <Link href={route} style={{ color: "blue" }}>
        {LinkText}
      </Link>
    </View>
  );
};

export default AuthAssist;
