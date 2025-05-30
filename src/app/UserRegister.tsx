import { Link, router } from "expo-router";
import React from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import authButtonStyle from "../css/authButtonStyle";
import authInputStyle from "../css/authInputStyle";
import authLableStyle from "../css/authLableStyle";
import authPageStyle from "../css/authPageStyle";
const UserRegister = () => {
  return (
    <SafeAreaView style={authPageStyle.container}>
      <View>
        <Text style={authPageStyle.headerText}>Let's get started</Text>
      </View>

      <View style={authPageStyle.inputSection}>
        <Text style={authLableStyle.label}>E-mail</Text>
        <TextInput style={authInputStyle.inputField} placeholder="Type shi" />
        <Text style={authLableStyle.label}>Phone number</Text>
        <TextInput style={authInputStyle.inputField} placeholder="Type shi" />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type shi"
          secureTextEntry
        />
        <Text style={authLableStyle.label}>Confirm Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type shi"
          secureTextEntry
        />
      </View>

      <View style={authPageStyle.buttonSection}>
        <View style={authPageStyle.assistText}>
          <Text>Already have an account? </Text>
          <Link href={"/UserLogin"} style={{ color: "blue" }}>
            Login
          </Link>
        </View>
        <Pressable
          style={authButtonStyle.button}
          onPress={() => router.push("/UserDashboard")}
        >
          <Text style={authButtonStyle.buttonText}>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UserRegister;
