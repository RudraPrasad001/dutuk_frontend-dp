import authButtonStyle from "@/css/authButtonStyle";
import { Link } from "expo-router";
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
    label: {
      fontWeight: "bold",
      alignSelf: "flex-start",
      marginLeft: 40,
      marginBottom: 5,
      marginTop: 10,
    },
    inputField: {
      borderColor: "gray",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginBottom: 15,
      width: 300,
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
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.inputField} placeholder="Type shi" />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Type shi"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonSection}>
        <View style={styles.registerText}>
          <Text>Don't have an account? </Text>
          <Link href={"/"} style={{ color: "blue" }}>
            Register
          </Link>
        </View>
        <Pressable style={authButtonStyle.button}>
          <Text style={authButtonStyle.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UserLogin;
