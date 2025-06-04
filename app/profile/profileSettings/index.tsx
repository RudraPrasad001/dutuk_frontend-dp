import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


const Index= ()=>{
    return(
        <View style={profileSettingsMenuStyle.container}>
            <Text style={profileSettingsMenuStyle.title}>Profile Settings</Text>
            <View style={profileSettingsMenuStyle.optionsView}>
                <Link style={profileSettingsMenuStyle.options} href='/profile/profileSettings/changePassword' >Change Password</Link>
                <Link style={profileSettingsMenuStyle.options} href='/profile/profileSettings/changeUsername' >Change Username</Link>
            </View>
        </View>
    )
}
const profileSettingsMenuStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 30,
    textAlign: "center",
  },
  optionsView: {
    gap: 15,
  },
  options: {
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 12,
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default Index;