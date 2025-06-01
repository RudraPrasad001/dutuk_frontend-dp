import authButtonStyle from "@/css/authButtonStyle";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import AuthAssist from "../../components/AuthAssist";
import authInputStyle from "../../css/authInputStyle";
import authLableStyle from "../../css/authLableStyle";
import authPageStyle from "../../css/authPageStyle";

import registerUser from "@/hooks/useRegisterUser";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const useUserRegistration = (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password != confirmPassword) {
      Alert.alert("Password ain't matching");
    } else {
      registerUser(email, password);
    }
  };

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
          onChangeText={setEmail}
        />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password"
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={authLableStyle.label}>Confirm Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type your password again"
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <View style={authPageStyle.buttonSection}>
        <AuthAssist
          AssistText="Already have an account? "
          LinkText="Login"
          route="/auth/UserLogin"
        />
        <Pressable
          style={authButtonStyle.button}
          onPress={() => useUserRegistration(email, password, confirmPassword)}
          accessibilityRole="button"
        >
          <Text style={authButtonStyle.buttonText}>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UserRegister;
