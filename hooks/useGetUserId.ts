import { supabase } from "@/utils/supabase";
const getUserID = async()=>{
    const user = await supabase.auth.getUser();
    if(user){
    console.log(user.data.user?.id);
    return user.data.user?.id;
    }
    return "NOT FOUND";
}
export default getUserID;