import logoutUser from "@/hooks/useLogoutUser";
import { useEffect } from "react";
import { Text, View } from "react-native";


const Logout = ()=>{
    useEffect(()=>{
        logoutUser();
    })
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 50 }}>Logout</Text>
        </View>
    )
}
export default Logout;