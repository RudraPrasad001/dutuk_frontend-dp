import { Alert } from "react-native";
import { supabase } from "../utils/supabase";

const registerUser = async (email: any, password: string) => {
  const { data, error }: any = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    Alert.alert("There is error", error.cause);
  } else {
    Alert.alert("Registered successfully");
  }
};

export default registerUser;
