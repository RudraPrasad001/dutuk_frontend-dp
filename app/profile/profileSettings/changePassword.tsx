import resetPasswordStyles from "@/css/resetPasswordStyle";
import getUserEmail from "@/hooks/useGetUserEmail";
import getUserID from "@/hooks/useGetUserId";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";


const ChangePassword = ()=>{

    const styles = resetPasswordStyles;

    const [userId,setUserId]=  useState<string|undefined>();
    const [userEmail,setUserEmail]=  useState<string|undefined>();
    const [newPassword,setNewPassword] = useState<string|undefined>();
    const [oldPassword,setOldPassword] = useState<string|undefined>();
    const [reNewPassword,setReNewPassword] = useState<string|undefined>();

    const getInfo = async()=>{
        let id = await getUserID();
        let email  = await getUserEmail();
        setUserEmail(email);
        setUserId(id);
    }
    const changePassword = async()=>{
        if(typeof userId!=='string') return Alert.alert("USER NOT FOUND");

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
                "Please verify your email before logging in."
            );
            } else {
            Alert.alert("Login Failed", error.message);
            }
        setNewPassword('');
        setOldPassword('');
        setReNewPassword('');
            return;
        }
        else{
            if(newPassword !==reNewPassword){
        setNewPassword('');
        setOldPassword('');
        setReNewPassword('');
               return Alert.alert("New Passwords do not Match");
            }
            if(newPassword===oldPassword){
        setNewPassword('');
        setOldPassword('');
        setReNewPassword('');
               return Alert.alert("New password cannot be the same as the old password!");
            }
        }
        let info = await supabase.auth.updateUser({password:newPassword})
        if(info.error !=null){
        setNewPassword('');
        setOldPassword('');
        setReNewPassword('');
           return Alert.alert(info.error.message);
        }
        Alert.alert("Password Changed Successfully");
        setNewPassword('');
        setOldPassword('');
        setReNewPassword('');
    }else{
        Alert.alert("Error,Cannot Change Password");
        setNewPassword('');
        setOldPassword('');
        setReNewPassword('');
    }
    }
    useEffect(()=>{
        getInfo();
    },[]);
    if(typeof userId ==='string' && typeof userEmail ==='string'){
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
        <Pressable style={styles.button} onPress={() => changePassword()}>
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