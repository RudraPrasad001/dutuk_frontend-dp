import authButtonStyle from "@/css/authButtonStyle";
import verifyOTP from "@/hooks/useVerifyOTP";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const params = useLocalSearchParams();
  const email = Array.isArray(params.email)
    ? params.email[0]
    : params.email?.toString();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Enter the OTP</Text>
      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 2,
          borderRadius: 10,
          width: 125,
        }}
        onChangeText={setOtp}
      />
      <Pressable
        onPress={() => verifyOTP(email, otp)}
        style={authButtonStyle.button}
      >
        <Text style={authButtonStyle.buttonText}>Verify</Text>
      </Pressable>
    </View>
  );
};

export default OtpPage;
