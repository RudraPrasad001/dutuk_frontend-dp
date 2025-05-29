import { StyleSheet } from "react-native";

const authPageStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSection: {
    padding: 20,
    alignItems: "center",
  },
  registerText: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 35,
  },
});

export default authPageStyle;
