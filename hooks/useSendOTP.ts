import { supabase } from "@/utils/supabase";

const sendOTP = async (email: any) => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
  });
  if (error) {
    console.error(error);
  }
};

export default sendOTP;
