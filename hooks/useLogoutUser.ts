import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { Alert } from "react-native";

const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    Alert.alert("Error at logout");
  } else {
    Alert.alert("Logout successful");
    router.replace("/");
  }
};

export default logoutUser;
