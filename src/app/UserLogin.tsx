import authButtonStyle from "../css/authButtonStyle";
import authInputStyle from "../css/authInputStyle";
import authLableStyle from "../css/authLableStyle";
import authPageStyle from "../css/authPageStyle";

import { Link, router } from "expo-router";
import React from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

const UserLogin = () => {
  return (
    <SafeAreaView style={authPageStyle.container}>
      <View>
        <Text style={authPageStyle.headerText}>Welcome back!</Text>
      </View>

      <View style={authPageStyle.inputSection}>
        <Text style={authLableStyle.label}>E-mail</Text>
        <TextInput style={authInputStyle.inputField} placeholder="Type shi" />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type shi"
          secureTextEntry
        />
      </View>

      <View style={authPageStyle.buttonSection}>
        <View style={authPageStyle.registerText}>
          <Text>Don't have an account? </Text>
          <Link href={"/UserRegister"} style={{ color: "blue" }}>
            Register
          </Link>
        </View>
        <Pressable
          style={authButtonStyle.button}
          onPress={() => router.push("/UserDashboard")}
        >
          <Text style={authButtonStyle.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UserLogin;
