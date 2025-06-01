import { View } from "react-native";
import UserAuth from "./auth/UserAuth";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <UserAuth />
    </View>
  );
}
