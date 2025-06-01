import authButtonStyle from "@/css/authButtonStyle";
import AuthAssist from "../../components/AuthAssist";
import authInputStyle from "../../css/authInputStyle";
import authLableStyle from "../../css/authLableStyle";
import authPageStyle from "../../css/authPageStyle";

import loginUser from "@/hooks/useLoginUser";

import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          onChangeText={setEmail}
        />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password"
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={authPageStyle.buttonSection}>
        <AuthAssist
          AssistText="Don't Have an account? "
          LinkText="Register"
          route="/auth/UserRegister"
        />
        <Pressable
          style={authButtonStyle.button}
          onPress={() => loginUser(email, password)}
        >
          <Text style={authButtonStyle.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UserLogin;
