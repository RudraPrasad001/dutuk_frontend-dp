import { supabase } from "@/utils/supabase";

const sendOtp = async(email:string) =>{
    const otp = await supabase.auth.signInWithOtp({email});
    return otp;
}
export default sendOtp;