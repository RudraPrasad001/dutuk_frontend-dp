import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { Alert } from "react-native";

const usePasswordChange = async (password: any) => {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    console.error(error);
  } else {
    Alert.alert("Password changed!");
    router.replace("/(tabs)/home");
  }
};

export default usePasswordChange;
