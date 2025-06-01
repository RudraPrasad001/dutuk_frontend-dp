import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { Alert } from "react-native";

const loginUser = async (userEmail: any, userPassword: any) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });
  if (error) {
    Alert.alert("Error when trying to log in");
  } else {
    Alert.alert("Login success!");
    router.replace("/(tabs)/home");
  }
};

export default loginUser;
