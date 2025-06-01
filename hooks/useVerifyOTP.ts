import { router } from "expo-router";
import { Alert } from "react-native";
import { supabase } from "../utils/supabase";

const verifyOTP = async (email: any, otp: any) => {
  console.log(email);

  const { error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: "email",
  });

  if (error) {
    const errorMsg = "There is an error verifying OTP: " + error.message;
    Alert.alert(errorMsg);
  } else {
    Alert.alert("✅ OTP verified successfully");
    router.replace("/(tabs)/home");
  }
};

export default verifyOTP;
