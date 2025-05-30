import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import AuthButton from "../components/AuthButton";
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
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your email"
        />
        <Text style={authLableStyle.label}>Phone number</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your phone number"
        />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password"
          secureTextEntry
        />
        <Text style={authLableStyle.label}>Confirm Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password again"
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
        <AuthButton buttonText="Register" route="/UserDashboard" />
      </View>
    </SafeAreaView>
  );
};

export default UserRegister;
