import { supabase } from "@/utils/supabase";
const getUserEmail = async()=>{
    const user = await supabase.auth.getUser();
    if(user){
    console.log(user.data.user?.email);
    return user.data.user?.email;
    }
    return "NOT FOUND";
}
export default getUserEmail;