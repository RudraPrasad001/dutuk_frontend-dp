import resetPasswordStyles from "@/css/resetPasswordStyle";
import getUserEmail from "@/hooks/useGetUserEmail";
import getUserID from "@/hooks/useGetUserId";
import sendOtp from "@/hooks/useSendOtp";
import { supabase } from "@/utils/supabase";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert, BackHandler, Pressable, Text, TextInput, View } from "react-native";


const ChangePassword = ()=>{

    const styles = resetPasswordStyles;

    const [localUserId,setUserId]=  useState<string|undefined>();
    const [userEmail,setUserEmail]=  useState<string|undefined>();
    const [newPassword,setNewPassword] = useState<string|undefined>();
    const [oldPassword,setOldPassword] = useState<string|undefined>();
    const [reNewPassword,setReNewPassword] = useState<string|undefined>();
    let {granted} = useLocalSearchParams();
    let {paramNewPassword,paramOldPassword,paramReNewPassword,userId}=useLocalSearchParams();
    let isGranted = "true"===granted

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        router.replace("/(tabs)/home"); 
        return true;
      };

     const listener= BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        listener.remove();
    }, [])
  );
 

    const changePasswordTry = async()=>{
        if(typeof userEmail ==='string'){
            console.log(`THE EMAIL SENT IS ${userEmail}`);
            await sendOtp(userEmail);
            router.push({pathname:`/profile/profileSettings/changePasswordOtp`,params:{email:userEmail,oldPassword,newPassword,reNewPassword,userId:localUserId}});
    }
    }

    const changePassword = async(newPassword:string,oldPassword:string,reNewPassword:string,userId:string,userEmail:string)=>{
        
        if(typeof userId!=='string'){
            console.log("main error" + userId)
        return Alert.alert("USER NOT FOUND");
        }

        if(newPassword?.length===0 || oldPassword?.length===0 ||reNewPassword?.length===0 ){
            return Alert.alert("Enter All the Fields");
        }
            if(typeof userEmail ==='string' && typeof oldPassword ==='string'){
                const { error } = await supabase.auth.signInWithPassword({email: userEmail,password: oldPassword});

        if (error) {
            const message = error.message.toLowerCase();

            if (message.includes("invalid login credentials")) {
            Alert.alert("Login Failed", "Wrong email or password.");
            } else if (message.includes("user not found")) {
            Alert.alert("Login Failed", "User does not exist.");
            } else if (message.includes("email not confirmed")) {
            Alert.alert(
                "Login Failed",
                "Please verify your email before logging in"
            );
            } else {
            Alert.alert("Login Failed", error.message);
            }
            return;
        }
        else{
            if(newPassword !==reNewPassword){
               return Alert.alert("New Passwords do not Match");
            }
            if(newPassword===oldPassword){
               return Alert.alert("New password cannot be the same as the old password!");
            }
        }
        let info = await supabase.auth.updateUser({password:newPassword})
        if(info.error !=null) {
           return Alert.alert(info.error.message);
        }
        Alert.alert("Password Changed Successfully");
    }else{
        console.log(userEmail + " "+oldPassword);
        Alert.alert("Error,Cannot Change Password");
    }
    }
    const helper = async()=>{
        
        let id = await getUserID();
        let email  = await getUserEmail();
        setUserEmail(email);
        setUserId(id)

        if(isGranted && typeof paramNewPassword==='string' && typeof paramOldPassword==='string' && typeof paramReNewPassword==='string' && typeof userId ==='string' && typeof email==='string'){
           isGranted=false;
           await changePassword(paramNewPassword,paramOldPassword,paramReNewPassword,userId,email);
        }
    }
    useEffect(()=>{
         helper();
        }
    ,[]);
    if(typeof localUserId ==='string' && typeof userEmail ==='string'){
    return(
    <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>
        <Text style={styles.label}>Enter Old Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Old Password"
            value={oldPassword}
            placeholderTextColor="#999"
            onChangeText={(val)=>setOldPassword(val)}
        />
        <Text style={styles.label}>Enter New Password</Text>
        <TextInput
            style={styles.input}
            placeholder="New Password"
            value={newPassword}
            placeholderTextColor="#999"
            onChangeText={(val)=>setNewPassword(val)}
        />
        <Text style={styles.label}>Enter New Password Again</Text>
        <TextInput
            style={styles.input}
            placeholder="Retype New Password"
            value={reNewPassword}
            placeholderTextColor="#999"
            onChangeText={(val)=>setReNewPassword(val)}
        />
        <Pressable style={styles.button} onPress={() => changePasswordTry()}>
        <Text style={styles.buttonText}>Change Password</Text>
        </Pressable>

    </View>
)}
else {
    return(
        <View style={styles.container}>
            <Text style={styles.loadingText}>Loading</Text>
        </View>
    )
}
}
export default ChangePassword;