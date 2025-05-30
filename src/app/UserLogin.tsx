import AuthButton from "../components/AuthButton";
import authInputStyle from "../css/authInputStyle";
import authLableStyle from "../css/authLableStyle";
import authPageStyle from "../css/authPageStyle";

import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";

const UserLogin = () => {
  return (
    <SafeAreaView style={authPageStyle.container}>
      <View>
        <Text style={authPageStyle.headerText}>Welcome back!</Text>
      </View>

      <View style={authPageStyle.inputSection}>
        <Text style={authLableStyle.label}>E-mail</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your email"
        />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password"
          secureTextEntry
        />
      </View>

      <View style={authPageStyle.buttonSection}>
        <View style={authPageStyle.assistText}>
          <Text>Don't have an account? </Text>
          <Link href={"/UserRegister"} style={{ color: "blue" }}>
            Register
          </Link>
        </View>

        <AuthButton buttonText="Login" route="/UserDashboard" />
      </View>
    </SafeAreaView>
  );
};

export default UserLogin;
