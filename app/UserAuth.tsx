import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const UserAuth = () => {
  const userAuthStyle = StyleSheet.create({
    button: {
      width: 250,
      height: 75,
      backgroundColor: "black",
      justifyContent: "center",
      borderRadius: 50,

      elevation: 10,

      margin: 5,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View>
      <Pressable style={userAuthStyle.button}>
        <Text style={userAuthStyle.buttonText}>Login</Text>
      </Pressable>

      <Pressable style={userAuthStyle.button}>
        <Text style={userAuthStyle.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

export default UserAuth;
