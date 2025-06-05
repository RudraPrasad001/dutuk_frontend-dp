import { router } from "expo-router";
import { Alert } from "react-native";
import { supabase } from "../utils/supabase";

const verifyPasswordOtp = async (email: any, otp: any,oldP:string,newP:string,newRP:string,userId:string) => {

    //oldP is old password, newP is new Password, newRP is the retyped new Password


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
    router.push({pathname:"/profile/profileSettings/changePassword",params:{granted:"true",paramNewPassword:newP,paramOldPassword:oldP,paramReNewPassword:newRP,userId}});
  }
};

export default verifyPasswordOtp;
