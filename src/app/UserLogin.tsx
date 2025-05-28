import authButtonStyle from "@/src/css/authButtonStyle";
import authInputStyle from "@/src/css/authInputStyle";
import authLableStyle from "@/src/css/authLableStyle";
import { Link, router } from "expo-router";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const UserLogin = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputSection: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonSection: {
      padding: 20,
      alignItems: "center",
    },
    registerText: {
      flexDirection: "row",
      alignItems: "center",
    },
    welcomeBackText: {
      fontSize: 30,
      marginTop: 50,
      marginLeft: 35,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.welcomeBackText}>Welcome back!</Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={authLableStyle.label}>E-mail</Text>
        <TextInput style={authInputStyle.inputField} placeholder="Type shi" />
        <Text style={authLableStyle.label}>Password</Text>
        <TextInput
          style={authInputStyle.inputField}
          placeholder="Type shi"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonSection}>
        <View style={styles.registerText}>
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
