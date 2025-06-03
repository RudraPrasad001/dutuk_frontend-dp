import AuthAssist from "../../components/AuthAssist";
import authInputStyle from "../../css/authInputStyle";
import authLableStyle from "../../css/authLableStyle";
import authPageStyle from "../../css/authPageStyle";

import loginUser from "@/hooks/useLoginUser";

import AuthButton from "@/components/AuthButton";
import googleLogin from "@/hooks/useGoogleAuth";
import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";

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
        <AuthButton
          buttonText="Use Google"
          buttonColorType="buttonSecondary"
          onPress={() => googleLogin()}
        />
      </View>

      <View style={authPageStyle.buttonSection}>
        <AuthAssist
          AssistText="Don't Have an account? "
          LinkText="Register"
          route="/auth/UserRegister"
        />
        <AuthButton
          buttonText="Login"
          buttonColorType="button"
          onPress={() => loginUser(email, password)}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserLogin;
