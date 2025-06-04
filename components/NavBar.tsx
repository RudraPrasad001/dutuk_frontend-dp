import navBarStyle from "@/css/navBarStyle";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-Dimensions.get("window").width * 0.6)).current;
  const handleNavBarVisibility = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -Dimensions.get("window").width * 0.6,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (visible) {
    return (
      <Animated.View style={[navBarStyle.container, { transform: [{ translateX: slideAnim }] }]}>
        <Pressable onPress={handleNavBarVisibility}>
          <Text style={navBarStyle.innerNavButtonText}>=</Text>
        </Pressable>
        <Pressable onPress={()=>router.push("/profile/helpcenter")}><Text style={navBarStyle.links}>Help Center</Text></Pressable>
        <Pressable onPress={()=>router.push("/profile/about")}><Text style={navBarStyle.links}>About</Text></Pressable>
        <Pressable onPress={()=>router.push("/profile/legal")}><Text style={navBarStyle.links}>Legal</Text></Pressable>
        <Pressable onPress={()=>router.push("/profile/profileSettings")}><Text style={navBarStyle.links}>Profile Settings</Text></Pressable>
        <Pressable onPress={()=>router.push("/profile/logout")}><Text style={navBarStyle.links}>Logout</Text></Pressable>
      </Animated.View>
    );
  } else {
    return (
      <View style={navBarStyle.collapsedButton}>
        <Pressable onPress={handleNavBarVisibility}>
          <Text style={navBarStyle.outerNavButtonText}>=</Text>
        </Pressable>
      </View>
    );
  }
};

export default NavBar;
